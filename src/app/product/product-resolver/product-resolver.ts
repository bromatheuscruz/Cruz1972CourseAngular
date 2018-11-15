
import { ProductService } from './../product.service';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../models/product.model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductResolver implements Resolve<Product>{

    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | any {
        let id = route.params['id'];

        return this.productService.getProductById(id);
    }


}