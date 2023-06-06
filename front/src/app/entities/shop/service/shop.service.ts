import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Favorite} from "../model/favorite.model";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {
  }

  getUserFavorites(userId : number):Observable<Favorite[]>{
    let endPoint : string = "http://localhost:8082/store/users/"+userId+"/favorites"
    return this.http.get<Favorite[]>(endPoint)
  }

  insertFavorite(favorite: Favorite):Observable<Favorite>{
    let endPoint : string = "http://localhost:8082/store/favorites"
    return this.http.post<Favorite>(endPoint,favorite)
  }

  deleteFavorite(favoriteId : number):Observable<any>{
    let endPoint : string = "http://localhost:8082/store/favorites/"+favoriteId
    return this.http.delete(endPoint)
  }
}
