import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() { }

  addProductToCart(product: Product): void {
    console.log(this.cart);
    this.cart = [...this.cart, product];
    console.log(this.cart);
  }

  getCartItems(): Product[] {
    return this.cart.slice();
  }
}
