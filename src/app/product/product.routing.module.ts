import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { NewProductComponent } from "./new-product/new-product.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductComponent } from "./product.component";
import { ProductListResolver } from "./product-resolver/product-list.resolver";
import { ProductResolver } from "./product-resolver/product-resolver";

const productRoutes = [
  {
    path: "products",
    component: ProductComponent,
    children: [
      {
        path: "edit/:id",
        component: ProductEditComponent,
        resolve: {product: ProductResolver}
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
