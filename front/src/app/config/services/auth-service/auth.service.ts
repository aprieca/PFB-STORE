import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import jwtDecode from "jwt-decode";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated  = new BehaviorSubject(false)
  name  = new BehaviorSubject("")

  cookie : string = this.cookieService.get("auth");


  constructor(private cookieService : CookieService) {
  }

  checkAuthentication():any{
    if(this.checkCookie()){
      this.authenticated.next(true);
      console.log("auth actualizada");
    }
  }

  setCookie(token:string):void{
    this.cookieService.set("auth",token,1);
  }

  logout():void{
    this.cookieService.delete("auth")
    this.authenticated.next(false);
  }

  getUserName():string{
    let decodedCookie:any = jwtDecode(this.cookie)
    console.log(decodedCookie.sub)
    return decodedCookie.sub
  }

  getName():string{
    let cookie : string = this.cookieService.get("auth");
    let decodedCookie:any = jwtDecode(cookie)
    return decodedCookie.firstname;
  }

  setName(name:string):void{
    this.name.next(name);
  }

  checkCookie():boolean{
   return this.cookieService.check('auth')
  }

}