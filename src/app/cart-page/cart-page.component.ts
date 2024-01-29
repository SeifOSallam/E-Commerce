import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  productsCart !: Array<Product>;

  Price : number = 0;
  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => this.productsCart = cart);
    setTimeout(() => {
      const price = document.getElementById("price");
      let total = 0;
      this.productsCart.forEach((product) => total+=product.price);
      if (price)
        price.innerText = total.toString();
      
    }, 1);
  }

  removeProduct(product : Product, index : number) {
    const quantity = document.getElementById(`quantity${index}`);
    if (quantity)
      this.updatePrice(product.price * parseInt(quantity.innerText), false);
    for (let i = index+1; i < this.productsCart.length; i++) {
      const nextQuantity = document.getElementById(`quantity${i}`)
      const currQuantity = document.getElementById(`quantity${i-1}`)
      if (nextQuantity && currQuantity) {
        currQuantity.innerText = nextQuantity.innerText
      }
    }    
    this.cartService.removeFromCart(product);
  }

  increaseQuantity(index : number) {
    const quantity = document.getElementById(`quantity${index}`);
    if (quantity) {
      if (parseInt(quantity.innerText) < this.productsCart[index].stock) {
        quantity.innerText = (parseInt(quantity.innerText) + 1).toString();
        this.updatePrice(this.productsCart[index].price, true);
      }
    }
  }
  decreaseQuantity(index : number) {
    const quantity = document.getElementById(`quantity${index}`);
    if (quantity) {
      if (parseInt(quantity.innerText) > 0) {
        quantity.innerText = (parseInt(quantity.innerText) - 1).toString();
        this.updatePrice(this.productsCart[index].price, false);
      }
    }
  }
  
  updatePrice(productprice : number, add : boolean) {
    const price = document.getElementById("price");
    if (price) {
      if (add) {
        price.innerText = (parseInt(price.innerText) + productprice).toString();
      }
      else {
        price.innerText = (parseInt(price.innerText) - productprice).toString();
      }
    } 
  }
}
