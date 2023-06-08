import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {AuthService} from "../../config/services/auth-service/auth.service";
import {CartItem} from "./model/cart.model";
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  userId?: number;
  cartItems :CartItem[]=[];
  quantity?:number;
/*
  totalPrice : number = 0;
*/
  prices:number[] = [];
  totalPrice:number=0;


  constructor(private cartService : CartService,private authService:AuthService) {
  }

  ngOnInit(): void {
    this.getUserId();
    if (this.userId) {
      this.getUserCart()
    }
  }
  getUserId(): void {
    this.userId = this.authService.getId();
  }

  getUserCart(){
    this.cartService.getUserCart(this.userId!).subscribe({
      next:items=> {
        this.cartItems = _.uniqBy(items,'itemId');
        this.prices = [];
        this.cartItems.map(item=>this.prices.push(item.price*item.quantity));
        this.calculatePrice();
      },
      error:(err)=>console.log(err)
    })
  }

  calculatePrice():void{
    for (let price of this.prices ){
      this.totalPrice += price;
    }
  }

  updateQuantity(cartItemId:number,quantity:number){
    if(quantity=== 0){
      this.deleteCartItem(cartItemId)
    }
    this.cartService.updateCartItemQuantity(cartItemId,quantity).subscribe({
      next:(response)=>{
        console.log("Quantity updated")
        console.log(response)
        this.totalPrice = 0;
        this.getUserCart()
      },
      error:(err)=>console.log(err)
      }
    )
  }

  deleteCartItem(cartItemId:number){
    this.cartService.deleteCartItem(cartItemId).subscribe({
      next:(response)=>{
        console.log("Cart Items Deleted")
        this.totalPrice = 0;
        this.getUserCart()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  deleteAllCartItems(userId:number){
    this.cartService.deleteAllUserCartItems(userId).subscribe({
      next:(response)=>{
        console.log("Cart Items Deleted")
        this.totalPrice = 0;
        this.getUserCart()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
