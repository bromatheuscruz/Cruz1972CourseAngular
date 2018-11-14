import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { CustomerComponent } from "./customer/customer.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "orders", component: OrderComponent },
      { path: "customers", component: CustomerComponent },
      {
        path: "login",
        component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
