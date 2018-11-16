import { AuthGuard } from "./guards/auth-guard.service";
import { AuthService } from "./auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CustomerComponent } from "./customer/customer.component";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./product/product.module";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    OrderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ProductModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
