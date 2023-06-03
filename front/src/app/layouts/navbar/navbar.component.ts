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

  constructor(public authService : AuthService,private router : Router) {
  }

  ngOnInit(): void {
    this.isAuthenticated()
    this.authService.authenticated.subscribe({
      next: response => this.authenticated = response
    });
    this.authService.name.subscribe({
      next: response => this.firstname = response
    });
    if( this.authenticated){
      this.firstname = this.authService.getName()
    }
  }

  isAuthenticated():void{
    this.authService.checkAuthentication()
    console.log("called navbar method")
    }

  logoutUser():void{
    this.authService.logout();
  }

}
