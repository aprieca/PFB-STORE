import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Observable, throwError} from "rxjs";
import {Item} from "../model/item.model";
import {ActivatedRoute} from "@angular/router";
import {catchError} from "rxjs/operators";
import {CartItem} from "../../cart/model/cart.model";
import {CartService} from "../../cart/cart.service";
import {AuthService} from "../../../config/services/auth-service/auth.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item$!: Observable<Item>
  itemId?: string;
  cartItem! :CartItem;
  userId?: number;

  quantity:number=1;

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute,private cartService:CartService,
              private authService:AuthService) {
  }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId') ?? undefined
    if (this.itemId) {
      this.item$ = this.itemService.getItemById(parseInt(this.itemId)).pipe(
        catchError(error => {
          console.log("Error al cargar los productos de la categoría", error)
          return throwError(() => error);
        }),
      );
    }
    this.getUserId();
  }

  addToCart(itemId:number,image:string,name:string,categoryName:string,price:number):void{
    this.cartItem = new CartItem(itemId,this.userId!,this.quantity,image,name,categoryName,price)
    this.cartService.addToCart(this.cartItem).subscribe({
      next:(response)=>console.log(response),
      error:(err)=>console.log(err)
    })
    console.log("item added to cart")
  }

  getUserId(): void {
    this.userId = this.authService.getId();
  }

}






