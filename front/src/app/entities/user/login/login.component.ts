import {Component, OnInit} from '@angular/core';
import {Login} from "../model/login.model";
import {Token} from "@angular/compiler";
import {LoginService} from "./service/login.service";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../../config/services/auth-service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  login?:Login;
  token?:string;


  constructor(private loginService:LoginService,private cookieService:CookieService, private authService:AuthService,
              private router :Router) {
  }

  ngOnInit(): void {
    this.initializeLogin()
  }

  sendLogin() {
    if(this.login){
      this.loginService.authenticateUser(this.login).subscribe({
        next:(authToken) => {
          this.token = authToken.token;
          this.authService.setCookie(this.token);
          this.authService.checkAuthentication();
          this.authService.setName(this.authService.getName());
          console.log(this.authService.getName());
          this.router.navigate(['/'])
        },
        error:(err) =>{
          console.log(err)
        }
      })
    }

  }

  private initializeLogin(): void {
    this.login = new Login("", "",);
  }
}
