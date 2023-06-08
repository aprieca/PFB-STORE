import { Component, OnInit } from '@angular/core';
import {map, Observable} from 'rxjs';
import { FavoriteService } from "./service/favorite.service";
import { Favorite } from "./model/favorite.model";
import { AuthService } from "../../config/services/auth-service/auth.service";
import { Item } from "../item/model/item.model";
import { ItemService } from "../item/service/item.service";
import {CartService} from "../cart/cart.service";
import {CartItem} from "../cart/model/cart.model";


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
  cartItem! :CartItem;
  deleted: boolean = false;

  constructor(private favoriteService: FavoriteService, private authService: AuthService, private itemService: ItemService,
  private cartService:CartService) {}

  ngOnInit(): void {
    this.getUserId();
    if (this.userId) {
      this.getFavoritesByUser(this.userId);
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

  addToCartFixedQuantity(itemId:number,image:string,name:string,categoryName:string,price:number):void{
    this.cartItem = new CartItem(itemId,this.userId!,1,image,name,categoryName,price)
    this.cartService.addToCart(this.cartItem).subscribe({
      next:(response)=>console.log(response),
      error:(err)=>console.log(err)
    })
    console.log("item added to cart")
  }

  loadItemsBatch(itemIds: number[]) {
    this.items$ = this.itemService.getItemsBatch(itemIds);
  }

  prepareFavoriteToDelete(itemId: number) {
    const favoriteId = this.getFavoriteIdByItemId(itemId);
    if (favoriteId) {
      this.deleteFavorite(favoriteId,itemId);
      this.isDeleted();
    }
  }

  deleteFavorite(favoriteId: number,itemId:number) {
    this.favoriteService.deleteFavorite(favoriteId).subscribe({
      next: (favorite) => {
        console.log("Favorito Eliminado");
        this.isDeleted();
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

  isDeleted() {
    this.deleted = true;
  }

  removeItemFromList(itemId:number){
    this.items$ = this.items$.pipe(
      map(items => items.filter(item => item.id !== itemId)))
  }

}
