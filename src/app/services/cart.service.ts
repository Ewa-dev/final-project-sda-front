import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cart$: Observable<Product[]> = this.cart.asObservable();

  addProductToCart(product: Product): void {
    this.cart$.pipe(take(1))
      .subscribe((products: Product[]) => {
        const productAlredyInCart = products.find((prod: Product) => prod.id === product.id);
        if(productAlredyInCart) {
          const filteredProducts = products.filter((prod: Product) => prod.id === productAlredyInCart.id);
          const updatedProduct = {...productAlredyInCart, quantity: productAlredyInCart.quantity + product.quantity };
          this.cart.next([...filteredProducts, updatedProduct]);
        } else {
          this.cart.next([...products, product]);
        }
      });
  }

  deleteProductFromCart(id: number): void {
    this.cart$.pipe(take(1))
      .subscribe((products: Product[]) => {
        const filteredProducts = products.filter((product: Product) => product.id !== id);
        this.cart.next(filteredProducts);
      })
  }
}
