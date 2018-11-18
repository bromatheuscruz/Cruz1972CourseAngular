import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from "./../product.service";
import { Product } from "./../../models/product.model";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {

  formulario: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.formulario)

    this.createNewProduct({
      title: this.formulario.value.title,
      price: this.formulario.value.price,
      slug: this.formulario.value.slug,
      description: this.formulario.value.description
    })
  }

  createNewProduct(product: any) {
    this.productService.createNewProduct(product).subscribe(msg => {
      console.log(msg);
      this.formulario.reset();
    }, (err: HttpErrorResponse) => {
    });
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      title: [''],
      slug: [''],
      price: [0.00],
      description: [''],
      error: []
    })

  }

}
