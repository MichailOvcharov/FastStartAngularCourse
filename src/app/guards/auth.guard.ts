import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from "../services/auth/auth.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate( ):  boolean | UrlTree {
    const loginUrl = this.router.parseUrl('/login');
    const shouldRedirect = this.authService.isAuthenticated() ? true : loginUrl;
    return shouldRedirect;
  }

  canActivateChild(): boolean | UrlTree {
    return this.canActivate();
  }

}
