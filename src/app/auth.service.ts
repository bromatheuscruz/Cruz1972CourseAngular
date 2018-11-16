import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";

import { API_CONFIG } from "./config/api.config";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  showNavEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }


  hidenNav() {
    this.showNavEmitter.emit(false);
  }

  showNav() {
    this.showNavEmitter.emit(true);
  }

  authenticateUser(user: any) {
    return this.http.post<any>(
      `${API_CONFIG.baseUrl}:${API_CONFIG.basePort}/customers/authenticate`,
      {
        email: user.email,
        password: user.password
      }
    );
  }

  isAuthenticated(): Observable<any> {
    let token = localStorage.getItem("token");


    return this.http
      .get<any>(`${API_CONFIG.baseUrl}:${API_CONFIG.basePort}/`, {
        headers: { "x-access-token": token }
      })
  }

}
