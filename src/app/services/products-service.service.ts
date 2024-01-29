import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http : HttpClient) {   }

   getAllProducts() {
    return this.http.get("https://dummyjson.com/products", {})
   }
   getProduct(id : string) {
    return this.http.get(`https://dummyjson.com/products/${id}`, {})
   }

}
