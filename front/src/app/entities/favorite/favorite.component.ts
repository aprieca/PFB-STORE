import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {FavoriteService} from "./service/favorite.service";
import {Favorite} from "./model/favorite.model";
import {AuthService} from "../../config/services/auth-service/auth.service";
import {Item} from "../item/model/item.model";
import {ItemService} from "../item/service/item.service";
import {CartService} from "../cart/cart.service";
import {CartItem} from "../cart/model/cart.model";
import {Route, Router} from "@angular/router";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  userId?: number;
  itemIds?: number[] = [];
  items$!: Observable<Item[]>;
  favorites?: Favorite[];
  cartItem!: CartItem;
  cartItems?: CartItem[]
/*  deleted: boolean = false;*/
  cartUpdated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private favoriteService: FavoriteService, private authService: AuthService, private itemService: ItemService,
              private cartService: CartService,private router:Router,private messageService:MessageService) {
  }

  ngOnInit(): void {
    this.getUserId();
    if (this.userId) {
      this.getFavoritesByUser(this.userId);
      this.getCartItems(this.userId)
    }
  }

  getFavoritesByUser(userId: number) {
    this.favoriteService.getUserFavorites(userId).subscribe({
      next: (favorites) => {
        this.favorites = favorites;
        favorites.map(favorite => this.itemIds?.push(favorite.itemId));
        if (this.itemIds) {
          this.loadItemsBatch(this.itemIds);
        }
      },
      error: err => {
        console.log("There was a problem recovering the favorite list.")
      }
    });
  }

  addToCartFixedQuantity(itemId: number, image: string, name: string, categoryName: string, price: number): void {
    this.cartItem = new CartItem(itemId, this.userId!, 1, image, name, categoryName, price)
    this.cartService.addToCart(this.cartItem).subscribe({
      next: (response) =>{
        console.log(response)
        this.showToastAddedToCart()
        this.router.navigate(['cart']) },
      error: (err) => console.log(err)
    })
    console.log("item added to cart")
  }

  getCartItems(userId: number) {
    this.cartService.getUserCart(userId).subscribe({
        next: (items) => this.cartItems = items,
        error: (err) => console.log(err)
      }
    )
  }

  loadItemsBatch(itemIds: number[]) {
    this.items$ = this.itemService.getItemsBatch(itemIds);
  }

  prepareFavoriteToDelete(itemId: number) {
    const favoriteId = this.getFavoriteIdByItemId(itemId);
    if (favoriteId) {
      this.deleteFavorite(favoriteId, itemId);
  /*    this.isDeleted();*/
    }
  }

  deleteFavorite(favoriteId: number, itemId: number) {
    this.favoriteService.deleteFavorite(favoriteId).subscribe({
      next: (favorite) => {
        console.log("Favorito Eliminado");
      /*  this.isDeleted();*/
        this.showToastDeletedFavorite()
        this.removeItemFromList(itemId)
      },
      error: (err) => {
        console.log("Error deleting favorite");
      }
    });
  }

  getFavoriteIdByItemId(itemId: number): number | undefined {
    let favorite = this.favorites?.find(favorite => favorite.itemId === itemId);
    return favorite?.id;
  }

  getUserId(): void {
    this.userId = this.authService.getId();
  }

/*  isDeleted() {
    this.deleted = true;
  }*/

  removeItemFromList(itemId: number) {
    this.items$ = this.items$.pipe(
      map(items => items.filter(item => item.id !== itemId)))
  }

  checkIfAlreadyInCart(itemId: number) {
    if (this.cartItems?.some((item => item.itemId == itemId))) {
      return true;
    } else{
      return false
    }
  }

  showToastAddedToCart():void{
    this.messageService.add({severity:'success', summary: 'Articulo Añadido al Carrito', detail: 'Articulo añadido al carrito correctamente'});
  }

  showToastDeletedFavorite():void{
    this.messageService.add({severity:'success', summary: 'Artículo Favorito Borrado', detail: 'Articulo favorito borrado correctamente'});
  }

}
