import { ProductService } from "./../product.service";
import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  product: Product = {
    title: "",
    price: 0.00,
    description: "",
    active: true,
    slug: "",
    tags: [],
    _id: ""
  };

  constructor(private productService: ProductService) {}

  createNewProduct(product: Product) {
    this.productService.createNewProduct(product).subscribe(msg => {
      console.log(msg);
    });
  }

  ngOnInit() {}
}
