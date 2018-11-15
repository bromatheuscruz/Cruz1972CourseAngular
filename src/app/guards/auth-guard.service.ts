import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.isAuthorized()) {
      this.authService.hidenNav();

      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  ngOnDestroy(): void {
    this.authService.showNav();
  }

  constructor(private authService: AuthService, private router: Router) {}
}
