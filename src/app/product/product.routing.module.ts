import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProductComponent } from "./product.component";
import { AuthGuard } from './../guards/auth-guard.service';
import { ProductResolver } from "./product-resolver/product-resolver";
import { NewProductComponent } from "./new-product/new-product.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListResolver } from "./product-resolver/product-list.resolver";

const productRoutes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: ProductComponent,
    children: [
      {
        path: "edit/:id",
        component: ProductEditComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: "novo",
        component: NewProductComponent
      },
      {
        path: "list",
        component: ProductListComponent,
        resolve: { products: ProductListResolver }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class ProductRoutingModule { }
