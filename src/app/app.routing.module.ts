import { AuthGuard } from "./guards/auth-guard.service";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { CustomerComponent } from "./customer/customer.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "orders", component: OrderComponent, canActivate: [AuthGuard] },
      {
        path: "customers",
        component: CustomerComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "login",
        component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
