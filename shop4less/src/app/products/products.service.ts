import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  createProduct(productBody){
    const producturl = 'http://localhost:3000/products';
    return this.httpClient.post(producturl, productBody); // return an observable
  }

  viewProduct(productId){
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get(producturl);
  }

  updateProduct(productId,productBody){
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.put(producturl,productBody);
  }

  deleteProduct(productId){
    const producturl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.delete(producturl);
  }

  searchCategoryProducts(categoryId){
    const producturl = 'http://localhost:3000/products/'+categoryId;
    return this.httpClient.get(producturl);
  }

  searchDateProducts(dateParam){
    const producturl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get(producturl);
  }

  





}
