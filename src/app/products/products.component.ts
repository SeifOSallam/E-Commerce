import { Component } from '@angular/core';
import Products from '../../assets/data/products-list.json'
import { NgFor, CommonModule } from '@angular/common';
import { Product } from '../models/product'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Array<Product>= Products;
  product!:Product;
  ratingArr = new Array(5);
  
  getProductRatings(id: number) {
     return this.products.find(p => p.id == id);
  }
}
