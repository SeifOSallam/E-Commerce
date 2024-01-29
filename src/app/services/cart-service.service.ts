import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  productsCart : BehaviorSubject<Array<Product>> = new BehaviorSubject<Array<Product>>([]);

  constructor(private http: HttpClient) { }

  addToCart(prod : Product) {
    const currVal = this.productsCart.value;
    console.log(this.productsCart.value)
    const updatedVal = [...currVal, prod];
    this.productsCart.next(updatedVal);
    console.log("added");
  }
  removeFromCart(index : number) {
    const currVal = this.productsCart.value;
    currVal.splice(index, 1);
    this.productsCart.next(currVal);
  }
  getCart() {
    return this.productsCart.asObservable();
  }

}
