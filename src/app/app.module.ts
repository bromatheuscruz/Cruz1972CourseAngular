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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    OrderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
