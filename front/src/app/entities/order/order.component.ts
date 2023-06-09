import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart/cart.service";
import {CartItem} from "../cart/model/cart.model";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  cartItems? :CartItem[];
  constructor(private cartService : CartService) {
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe({
      next:(data)=>{
        this.cartItems = data;
        console.log(this.cartItems)
      }
    })
  }






}
