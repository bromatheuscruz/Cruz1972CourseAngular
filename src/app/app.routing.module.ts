import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./guards/auth-guard.service";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";  
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";
import { CustomerComponent } from "./customer/customer.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "products", loadChildren: "./product/product.module#ProductModule" },
      { path: "home", component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
      { path: "orders", component: OrderComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
      { path: "customers", component: CustomerComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
      { path: "login", component: LoginComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }

    ])],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
