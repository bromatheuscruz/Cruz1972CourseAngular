import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) {
    this.authService.hidenNav();
  }

  authUser(user: any) {
    this.authService.authenticate(user).subscribe(res => {
      if (this.user.email == res.data.email) {
        localStorage.setItem("token", res.tolken);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("name", res.data.name);
        this.router.navigate(["/"]);
      } else {
      }
    });
  }

  ngOnInit() {}
}
