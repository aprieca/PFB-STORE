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
export class RoleGuard  {
  role :string = "";

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.role= this.authService.getRole().toString()
    console.log(this.role)

    if (this.role == 'ADMIN'){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
export const AuthRole: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RoleGuard).canActivate(next, state);
}

