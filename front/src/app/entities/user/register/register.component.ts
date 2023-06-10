import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {RegisterService} from "./service/register.service";
import {AuthService} from "../../../config/services/auth-service/auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user?: User;
  token?: string;
  passwordRepeat: any;


  constructor(private registerService: RegisterService, private authService: AuthService, private router: Router,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.initializeUser();
  }

  registerUser() {
    if (this.user) {
      this.registerService.registerUser(this.user).subscribe({
        next: (authToken) => {
          this.token = authToken.token
          this.authService.setCookie(this.token);
          this.authService.checkAuthentication();
          this.authService.setName(this.authService.getName());
          this.showToastRegistered();
          this.router.navigate(['/']);
        },
        error: err => console.log(err)
      })
    }
  }

  initializeUser() {
    this.user = new User("", "", "", "", null, "", "USER");
  }

  showToastRegistered(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Registro Correcto',
      detail: 'Te has registrado correctamente'
    });
  }

}
