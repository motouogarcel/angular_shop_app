import { Product } from './../../models/product';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined

  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()

  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()

  ngOnInit(): void {
 }

 handleClickProduct(product: Product | undefined){
  // console.log(product);
  this.displayProductViewModal.emit(product)
 }

 deleteProduct(product: Product | undefined){
  // console.log(product);
  // this.deleteProductItem.emit(product);
 }




}






