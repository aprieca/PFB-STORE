import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartItem} from "./model/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  addToCart(cartItem: CartItem): Observable<CartItem> {
    let endpoint = "http://localhost:8082/store/cart/items"
    console.log("se esta ejecutando la peticion")
    console.log(cartItem)
    return this.http.post<CartItem>(endpoint, cartItem);
  }

  getUserCart(userId: number): Observable<CartItem[]> {
    let endpoint = "http://localhost:8082/store/users/" + userId + "/cart"
    return this.http.get<CartItem[]>(endpoint);
  }

  deleteCartItem(cartItemId:number): Observable<CartItem>{
    let endpoint = "http://localhost:8082/store/cart/items/"+cartItemId
    return this.http.delete<CartItem>(endpoint);
  }

  deleteAllUserCartItems(userId:number): Observable<CartItem>{
    let endpoint = "http://localhost:8082/store/users/"+userId+"/cart/items"
    return this.http.delete<CartItem>(endpoint);
  }

  updateCartItemQuantity(cartItemId:number,quantity:number){
    let endpoint = "http://localhost:8082/store/cart/items/"+cartItemId+"/quantity/"+quantity
    return this.http.patch<CartItem>(endpoint,null);
  }
}
