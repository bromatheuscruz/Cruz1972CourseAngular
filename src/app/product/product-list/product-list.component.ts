import { Product } from "./../../models/product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.list().subscribe(products => {
      this.products = products;
    });
  }

  editar(id: string): void {
    this.router.navigate(["/products", "edit", id]);
  }
}
