import { Component } from '@angular/core';
import Products from '../../assets/data/products-list.json'
import { NgFor, CommonModule } from '@angular/common';
import { Product } from '../models/product'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsServiceService } from '../services/products-service.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products !: Array<Product>;

  constructor(private productService : ProductsServiceService,
    private cartService: CartServiceService) { }
  
  ngOnInit() {
    this.productService.getAllProducts().subscribe((res : any) => this.products = res.products);
  }

  getProductRatings(id: number) {
     return this.products.find(p => p.id == id);
  }
  addCart(index : number) {
    this.cartService.addToCart(this.products[index])
  }
}
