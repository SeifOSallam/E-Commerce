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

  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => this.productsCart = cart);
  }

  removeProduct(index : number) {
    this.cartService.removeFromCart(index);
  }
  
}
