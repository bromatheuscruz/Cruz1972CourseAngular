import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.hidenNav();
  }
  isLoginError: boolean;
  user: any = {
    email: "",
    password: ""
  }

  isValidAndTouched(fieldName: any): boolean {
    return fieldName.invalid && fieldName.touched ? true : false;
  }

  setLocalStorage(response: any) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("name", response.data.name);
  }

  removeItemsFromLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  }

  authenticateUser(user: any) {

    console.log(user)

    this.authService.authenticateUser(user).subscribe((response) => {
      this.setLocalStorage(response);
      this.router.navigate(['/home'])
    }, (err: HttpErrorResponse) => {
      this.isLoginError = true;
      this.user.password = "";
    });
  }

  cleanUser() {
    this.user = {
      email: "",
      password: ""
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
