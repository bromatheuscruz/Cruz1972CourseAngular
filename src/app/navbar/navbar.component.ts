import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  showNav: boolean;

  constructor(private auth: AuthService) {
    this.showNav = false;
  }

  ngOnInit() {
    this.auth.showNavEmitter.subscribe(show => {
      this.showNav = show;
    });
  }
}
