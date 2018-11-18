import { Product } from "./../models/product.model";
import { API_CONFIG } from "./../config/api.config";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private readonly API = `${API_CONFIG.baseUrl}:${API_CONFIG.basePort}`;
  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API}/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.API}/products/admin/${id}`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(`${this.API}/products/${product._id}`, {
      product
    });
  }

  createNewProduct(product: Product): Observable<any> {
    console.log('Enviando ... no service ')
    console.log(product)
    return this.http.post<any>(`${this.API}/products`, {
      title: product.title,
      price: product.price,
      description: product.description,
      slug: product.slug
    });
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/products/${id}`)
  }
}
