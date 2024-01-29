import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { ProductsServiceService } from '../services/products-service.service';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() id : string = "";
  itemDetails !: Product;

  constructor(private productsService: ProductsServiceService,
     private cartService: CartServiceService) {}
  ngOnInit() {
    this.productsService.getProduct(this.id).subscribe((res : any) => this.itemDetails = res);
  }

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
  increaseNum(currVal : string) {
    const element = document.getElementById("number");
    if (element) {
      if (parseInt(currVal) < this.itemDetails.stock)
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
  addToCart() {
    this.cartService.addToCart(this.itemDetails)
  }
}
