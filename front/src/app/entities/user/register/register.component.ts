import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {RegisterService} from "./service/register.service";
import {Token} from "../model/token.model";
import {AuthService} from "../../../config/services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  user?:User;
  token?:string;


  constructor(private registerService : RegisterService,private authService : AuthService,private router :Router) {

  }

  ngOnInit(): void {
    this.initializeUser();
  }

  registerUser(){
    if(this.user){
      this.registerService.registerUser(this.user).subscribe({
        next: (authToken) =>
        {this.token = authToken.token
        this.authService.setCookie(this.token)
          this.authService.checkAuthentication();
          this.authService.setName(this.authService.getName());
          this.router.navigate(['/'])
        },
        error:err => console.log(err)
      })
    }
  }

  initializeUser(){
    this.user = new User("","","","",null,"","","USER");
  }

}
