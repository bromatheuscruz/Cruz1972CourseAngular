import { AuthGuard } from "./guards/auth-guard.service";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";
import { CustomerComponent } from "./customer/customer.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: "products", loadChildren: "./product/product.module#ProductModule" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: "orders", component: OrderComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: "customers", component: CustomerComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
