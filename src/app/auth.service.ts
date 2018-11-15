import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";

import { API_CONFIG } from "./config/api.config";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  showNavEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  userAuthenticate: boolean = false;

  hidenNav() {
    this.showNavEmitter.emit(false);
  }

  showNav() {
    this.showNavEmitter.emit(true);
  }

  authenticate(user: any) {
    return this.http.post<any>(
      `${API_CONFIG.baseUrl}:${API_CONFIG.basePort}/customers/authenticate`,
      {
        email: user.email,
        password: user.password
      }
    );
  }

  isAuthorized(): boolean {
    let token = localStorage.getItem("token");

    if (token == null) {
      return false;
    }

    this.http
      .get(`${API_CONFIG.baseUrl}:${API_CONFIG.basePort}/`, {
        headers: { "x-access-token": token }
      })
      .subscribe(response => {
        console.log(response);
        this.userAuthenticate = response["auth"];
      });

    return this.userAuthenticate;
  }
}
