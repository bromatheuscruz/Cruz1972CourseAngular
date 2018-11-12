import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { NewProductComponent } from "./new-product/new-product.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductComponent } from "./product.component";

const productRoutes = [
  {
    path: "products",
    component: ProductComponent,
    children: [
      {
        path: "edit/:id",
        component: ProductEditComponent
      },
      {
        path: "novo",
        component: NewProductComponent
      },
      {
        path: "list",
        component: ProductListComponent
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
export class ProductRoutingModule {}
