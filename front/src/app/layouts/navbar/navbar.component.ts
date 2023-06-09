import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../config/services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  authenticated : boolean = false;
  firstname : string = "";
  role :string = "";

  constructor(public authService : AuthService,private router : Router) {
  }

  ngOnInit(): void {
    this.isAuthenticated()
    this.authService.authenticated.subscribe({
      next: response => this.authenticated = response
    });
    if( this.authenticated){
      this.role = this.authService.getRole().toString()
      console.log(this.role)
    }
  }

  getName():string{
    return this.authService.getName();
  }

  isAuthenticated():void{
    this.authService.checkAuthentication()
    console.log("called navbar method")
    }

  logoutUser():void{
    this.authService.logout();
  }

}
