import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Product } from '../../models/product';


@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, ProductItemComponent]
})
export class ProductListComponent {

  Products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description 1',
      category: ['Category 1', 'Category 2'],
      imageUrl: 'http://lorempixel.com/400/200',
      sold_price: 100,
      regular_price: 200,
      created_at: new Date()
    }
  ]
}
