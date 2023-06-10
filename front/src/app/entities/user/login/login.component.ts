import {Component, OnInit} from '@angular/core';
import {Login} from "../model/login.model";
import {Token} from "@angular/compiler";
import {LoginService} from "./service/login.service";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../../config/services/auth-service/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  login?:Login;
  token?:string;


  constructor(private loginService:LoginService,private cookieService:CookieService, private authService:AuthService,
              private router :Router,private messageService: MessageService) {
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
          this.showToastLoggedIn();
          console.log(this.authService.getName());
          this.router.navigate(['/']);
        },
        error:(err) =>{
          this.showToastIncorrectLogin();
          console.log(err);
        }
      })
    }

  }

  private initializeLogin(): void {
    this.login = new Login("", "",);
  }

  showToastLoggedIn():void{
    this.messageService.add({severity:'success', summary: 'Login Correcto', detail: 'Bienvenido '+this.authService.getName()});
  }

  showToastIncorrectLogin():void{
    this.messageService.add({severity:'error', summary: 'Login Incorrecto', detail: 'Has introducido unas credenciales incorrectas'});
  }
}
