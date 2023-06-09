import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Observable, throwError} from "rxjs";
import {Item} from "../model/item.model";
import {ActivatedRoute, Router} from "@angular/router";
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
  cartItem!: CartItem;
  cartItems?: CartItem[]
  userId?: number;
  quantity: number = 1;

  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute, private cartService: CartService,
              private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId') ?? undefined
    if (this.itemId) {
      this.checkIfAlreadyInCart()
      console.log(this.itemId)
      this.item$ = this.itemService.getItemById(parseInt(this.itemId)).pipe(
        catchError(error => {
          console.log("Error al cargar los productos de la categoría", error)
          return throwError(() => error);
        }),
      );
    }
    this.getUserId();
    if (this.userId) {
      this.getCartItems(this.userId)
      console.log(this.cartItems)

    }
  }

  getCartItems(userId: number) {
    this.cartService.getUserCart(userId).subscribe({
        next: (items) => this.cartItems = items,
        error: (err) => console.log(err)
      }
    )
  }

  addToCart(itemId: number, image: string, name: string, categoryName: string, price: number): void {
    if (this.cartItems?.some((item => item.itemId == itemId))) {
      console.log("el item ya exite")
    } else {
      this.cartItem = new CartItem(itemId, this.userId!, this.quantity, image, name, categoryName, price)
      this.cartService.addToCart(this.cartItem).subscribe({
        next: (response) => {
          console.log(response)
          this.cartItems?.push(this.cartItem)
          this.route.navigate(['/cart'])
        },


        error: (err) => console.log(err)
      })
      console.log("item added to cart")
    }
  }

  getUserId(): void {
    this.userId = this.authService.getId();
  }

  checkIfAlreadyInCart() :boolean {
    if (this.cartItems?.some((cartItem) => cartItem.itemId == parseInt(this.itemId!))) {
      return true;
    }
    return false;
  }
}






