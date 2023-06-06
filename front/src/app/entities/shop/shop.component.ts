import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item/service/item.service";
import {Item} from "../item/model/item.model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ShopService} from "./service/shop.service";
import {Favorite} from "./model/favorite.model";
import {AuthService} from "../../config/services/auth-service/auth.service";

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

  constructor(private itemService: ItemService,private shopService:ShopService,private authService:AuthService) {

  }

  ngOnInit(): void {
    this.getItemsByCategory()
    this.getUserId()
    if(this.userId){
      this.getFavoritesByUser(this.userId)
    }



  }

  getItemsByCategory() {
    this.items$ = this.itemService.getAllItemsByCategoryId(1).pipe(
      catchError(error => {
        console.log("Error al cargar los productos de la categoría", error)
        return throwError(() => error);
      }),
    )
  }

  getFavoritesByUser(userId:number){
    this.shopService.getUserFavorites(userId).subscribe({
      next: (favorites) =>{
        this.favorites = favorites
      } ,error:err => {
        console.log("There was a problem recovering the favorites list.")
      }
    })
  }

  insertFavorite(favorite:Favorite):void{
    this.shopService.insertFavorite(favorite).subscribe({
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

  createFavorite(itemId:number, userId:number):void{
    this.favorite = new Favorite(undefined,itemId,userId)
    this.insertFavorite(this.favorite);
  }
  deleteFavorite(favoriteId :number){
    this.shopService.deleteFavorite(favoriteId);
    let index = this.favorites?.findIndex(favorite => favorite.id === favoriteId)
    this.favorites?.splice(index!)
  }

  getUserId():void{
    this.userId = this.authService.getId();
  }

  isFavorite(itemId: number | undefined): boolean {
    return <boolean>this.favorites?.some(favorite => favorite.itemId === itemId);
  }

  favoriteComposer(itemId: number,userId:number,favoriteId:number){
    if(this.isFavorite(itemId)){
      this.deleteFavorite(favoriteId)

    }
    else{
      this.createFavorite(itemId,userId)
    }

  }

}
