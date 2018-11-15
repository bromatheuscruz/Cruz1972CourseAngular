import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title: string = "Node Store API";
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.showNav();
  }
}
