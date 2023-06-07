import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {ItemService} from "../item/service/item.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{




  constructor(private cartService : CartService, itemService : ItemService) {
  }

  ngOnInit(): void {

  }


}
