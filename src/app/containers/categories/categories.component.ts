import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { Product } from 'src/app/models/product.model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[];

  constructor(private productsApi: ProductsApiService,) { }

  ngOnInit(): void {
    this.productsApi.getProducts().subscribe(products => this.buildCategoriesFrom(products));
  }

  buildCategoriesFrom(products: Product[]) {
    var categoryNames = {};
    for (let product of products) {
      if (product.category) {
        categoryNames[product.category] = 1;
      }
    }
    this.categories = Object.keys(categoryNames); 
  }

}
