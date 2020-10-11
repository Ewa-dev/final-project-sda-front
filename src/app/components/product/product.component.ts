import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;

  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter<Product>();

  onClick(product: Product): void {
    this.onAddToCart.emit(product);
  }
}
