import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Input, Output } from '@angular/core';
import { Product } from '../models/product';
import Products from '../../assets/data/products-list.json'
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  products : Array<Product> = Products;
  @Input() id : string = "";
  itemDetails !: Product;
  createDummyProduct() {
    return {
      id : 0,
      title : "",
      description:"",
      price:0,
      discountPercentage:0,
      rating:0,
      stock:0,
      brand:"",
      category:"",
      thumbnail:"",
      images:[],
      createdAt:""
    }
  }
  ngOnInit() {
    this.itemDetails = this.products.find((p : Product) => p.id == parseInt(this.id)) || this.createDummyProduct();
  }
  increaseNum(currVal : string) {
    const element = document.getElementById("number");
    if (element) {
      element.innerText = (parseInt(currVal) + 1).toString();
    }
  }
  decreaseNum(currVal : string) {
    const element = document.getElementById("number");
    if (element) {
      if (parseInt(currVal) > 1) {
        element.innerText = (parseInt(currVal) - 1).toString();
      }
    }
  }
}
