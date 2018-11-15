import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product;
  id: string;
  subscription: Subscription;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(msg => {
      console.log(msg);
    });
  }

  ngOnInit() {


    this.subscription = this.activatedRoute.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
    })


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
