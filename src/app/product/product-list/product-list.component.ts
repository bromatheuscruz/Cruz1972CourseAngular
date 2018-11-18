import { Subscription } from 'rxjs';
import { Product } from "./../../models/product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  subscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe((data: { products: Product[] }) => {

      this.products = data.products;
    })



  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(response => {
      
    })
  }

  editar(id: string): void {
    this.router.navigate(["/products", "edit", id]);
  }
}
