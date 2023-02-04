import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CompanyAuthService } from '../services/company-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthGuard implements CanActivate {
  constructor(
    private authService: CompanyAuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    let isLoggedIn = this.authService.isAuthenticated();
    if(isLoggedIn){
      return true;
    }
    else{
      return false
    }
  }
}
