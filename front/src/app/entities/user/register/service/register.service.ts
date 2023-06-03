import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../../model/token.model";
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  public registerUser(user:User):Observable<Token>{
    let urlEndpoint: string = "http://localhost:8082/store/auth/register";
    return this.http.post<Token>(urlEndpoint,user);
  }
}
