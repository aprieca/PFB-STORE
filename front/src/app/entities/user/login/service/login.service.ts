import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../../model/token.model";
import {Login} from "../../model/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public authenticateUser(login:Login):Observable<Token>{
    let urlEndpoint: string = "http://localhost:8082/store/auth/authenticate";
    return this.http.post<Token>(urlEndpoint,login);
  }
}
