import { Product } from "./../../../models/product.model";
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
  inscricao: Subscription;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe(msg => {
      console.log(msg);
    });
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });

    this.productService.getProductById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
