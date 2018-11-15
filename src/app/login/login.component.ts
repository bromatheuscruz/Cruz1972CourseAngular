import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.hidenNav();
  }

  user: any = this.getEmptyUser();

  setLocalStorage(res: any) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("email", res.data.email);
    localStorage.setItem("name", res.data.name);
  }

  removeLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  }

  authUser(user: any) {
    this.authService.authenticate(user).subscribe(res => {
      if (this.user.email == res.data.email) {
        this.setLocalStorage(res);
        this.authService.showNav();
        this.router.navigate(["/"]);
      } else {
        this.removeLocalStorage();
      }
    });
  }

  getEmptyUser() {
    return {
      email: "",
      password: ""
    };
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.user = this.getEmptyUser();
  }
}
