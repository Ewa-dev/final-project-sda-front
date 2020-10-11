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
        this.cart.next([...products, product]);
      });
  }
}
