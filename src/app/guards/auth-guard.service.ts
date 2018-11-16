import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from "@angular/router";
import { AuthService } from './../auth.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated: boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.checkAccess();
  }

  canLoad(router: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAccess();
  }

  private checkAccess(): boolean {
    let isAuth: boolean;
    this.authService.isAuthenticated().subscribe((data: { auth: boolean }) => {

      isAuth = data.auth
      console.log(isAuth)
    })

    return !isAuth;

  }


}