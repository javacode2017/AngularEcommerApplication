import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  createProduct(productBody):Observable<Product>{
    const producturl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(producturl, productBody); // return an observable
  }

  viewProduct(productId): Observable<Product>{
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get<Product>(producturl);
  }

  updateProduct(productId,productBody):Observable<Product>{
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.put<Product>(producturl,productBody);
  }

  deleteProduct(productId): Observable<Product>{
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.delete<Product>(producturl);
  }

  searchCategoryProducts(categoryId) : Observable<Product>{
    const producturl = 'http://localhost:3000/products/'+categoryId;
    return this.httpClient.get<Product>(producturl);
  }

  searchDateProducts(dateParam): Observable<Product>{
    const producturl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(producturl);
  }

  





}
