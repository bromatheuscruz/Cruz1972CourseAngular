import { ProductService } from './../product.service';
import { Product } from "../../models/product.model";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductListResolver implements Resolve<Product[]> {
   
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        return this.productService.list();


    }
}