import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProductRoutingModule } from "./product.routing.module";

import { ProductComponent } from "./product.component";
import { NewProductComponent } from "./new-product/new-product.component";

import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

@NgModule({
  imports: [CommonModule, RouterModule, ProductRoutingModule, FormsModule],
  exports: [],
  declarations: [
    ProductComponent,
    NewProductComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  providers: [ProductService]
})
export class ProductModule {}
