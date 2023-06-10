import {inject, Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from "../../auth-service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  auth: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.checkAuthentication();
    this.authService.authenticated.subscribe({
      next: (value) =>{
        this.auth = value;
      } ,
      error:err => console.log(err)
    })
    if (this.auth){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
export const AuthLogin: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(LoginGuard).canActivate(next, state);
}
