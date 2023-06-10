import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item/service/item.service";
import {Item} from "../item/model/item.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {FavoriteService} from "../favorite/service/favorite.service";
import {Favorite} from "../favorite/model/favorite.model";
import {AuthService} from "../../config/services/auth-service/auth.service";
import {CartService} from "../cart/cart.service";
import {CartItem} from "../cart/model/cart.model";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items$?: Observable<Item[]>
  favorite?: Favorite;
  favorites?:Favorite[];
  userId?:number;
  cartItem! :CartItem;
  cartItems? : CartItem[]
  authenticated? : boolean;

  constructor(private itemService: ItemService, private favoriteService:FavoriteService, private authService:AuthService
  ,private cartService:CartService,private messageService:MessageService,private route:Router) {
  }

  ngOnInit(): void {
    this.getItemsByCategory()
    this.checkAuthentication();
    if(this.authenticated){
      this.getUserId()
    }
    if(this.userId){
      this.getFavoritesByUser(this.userId)
      this.getCartItems(this.userId)
    }
  }

  getItemsByCategory() {
    this.items$ = this.itemService.getAllItemsByCategoryId(1).pipe(
      catchError(error => {
        console.log("Error al cargar los productos de la categoría", error)
        return throwError(() => error);
      })
    )
  }

  getCartItems(userId:number){
    this.cartService.getUserCart(userId).subscribe({
      next:(items)=>this.cartItems = items,
      error:(err)=>console.log(err)
      }
    )
  }

  getFavoritesByUser(userId:number){
    this.favoriteService.getUserFavorites(userId).subscribe({
      next: (favorites) =>{
        this.favorites = favorites
      } ,error:err => {
        console.log("There was a problem recovering the favorite list.")
      }
    })
  }

  insertFavorite(favorite:Favorite):void{
    if(!this.authenticated){
      this.route.navigate(['login'])
    }
    this.favoriteService.insertFavorite(favorite).subscribe({
      next:(favorite)=> {
        this.favorites?.push(favorite)
        console.log("Favorite Inserted")
        console.log(favorite)
      },
      error:(err)=>{
        console.log("There was a problem inserting favorite")
      }
    })
  }

  addToCartFixedQuantity(itemId:number,image:string,name:string,categoryName:string,price:number):void{
    if(!this.authenticated){
      this.route.navigate(['login'])
    }
    if(this.cartItems?.some((item=>item.itemId == itemId))){
      console.log("el item ya exite")
      this.showToastAlreadyInCart()
    }else{
      this.cartItem = new CartItem(itemId,this.userId!,1,image,name,categoryName,price)
      this.cartService.addToCart(this.cartItem).subscribe({
        next:(response)=>{
          console.log(response)
          this.cartItems?.push(this.cartItem)
          this.showToastAddedToCart()}
        ,
        error:(err)=>console.log(err)
      })
      console.log("item addeded to cart")
    }
  }

  createFavorite(itemId:number, userId:number):void{
    this.favorite = new Favorite(undefined,itemId,userId)
    this.insertFavorite(this.favorite);
  }
  deleteFavorite(favoriteId :number){
    console.log("ejecutando borrado")
    this.favoriteService.deleteFavorite(favoriteId).subscribe({
      next:(favorite)=>{
        console.log("Favorito Borrado Correctamente")
      },
      error:(err) =>console.log(err)
    });
    let index = this.favorites?.findIndex(favorite => favorite.id === favoriteId)
    this.favorites?.splice(index!)
  }

  getUserId():void{
    this.userId = this.authService.getId();
  }

  isFavorite(itemId: number | undefined): boolean {
    console.log("is favorite")
    return <boolean>this.favorites?.some(favorite => favorite.itemId === itemId);
  }

  favoriteComposer(itemId: number,userId:number){
    if(this.isFavorite(itemId)){
      let favoriteId = this.getFavoriteIdByItemId(itemId)
      console.log(favoriteId)
      this.deleteFavorite(favoriteId!)
    }
    else{
      this.createFavorite(itemId,userId)
    }
  }
  getFavoriteIdByItemId(itemId:number){
    let favorite = this.favorites?.find((favorite) => favorite.itemId === itemId);
    return favorite?.id;
  }

  showToastAddedToCart():void{
    this.messageService.add({severity:'success', summary: 'Articulo Añadido al Carrito', detail: 'Articulo añadido al carrito correctamente'});
  }
  showToastAlreadyInCart():void{
    this.messageService.add({severity:'warn', summary: 'Articulo ya existe en el carrito', detail: 'Este artículo ya ha sido añadido al carrito'});
  }

  checkAuthentication() {
    this.authService.checkAuthentication();
    this.authService.authenticated.subscribe({
      next: (response) => this.authenticated = response,
      error: (err) => console.log(err)
    })
  }



}
