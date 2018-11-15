import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "../models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.list().subscribe(data => {
      this.products = data;
    });
  }
}
