import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from './../auth.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  isAuthenticated: boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {


    this.authService.isAuthenticated().subscribe((data) => {
      this.isAuthenticated = data.auth;
    });

    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }


  }





  constructor(private authService: AuthService, private router: Router) { }
}