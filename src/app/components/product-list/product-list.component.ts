

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Product } from '../../models/product';
import { ModalProductViewComponent } from "../modal-product-view/modal-product-view.component";
import { ProductServiceService } from '../../services/product-service.service';


@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, ProductItemComponent, ModalProductViewComponent]
})
export class ProductListComponent {

  Products: Product[] = []

  isDisplayModal: Boolean = false

  modalProduct:Product | undefined

  productModal: Product|undefined;

  constructor(private productService: ProductServiceService) {

  }

  ngOnInit(): void {
    // this.Products = this.productService.getProducts()
    this.productService.getProducts()
    .then((value: Product[])=>{
      this.Products = value
    })
    .catch(()=>{
      this.Products = []
    })
  }

  handleDeleteProduct(product:Product){
    // this.Products = this.Products.filter(p => p._id !== product._id)
    // console.log("handleDeleteProduct",product);
  }

  handledisplayProductViewModal(product:Product){
    if(product){
      this.isDisplayModal = true;
      this.modalProduct = product
      // this.productModal = product
    }
  }

  closeModalView(){
    console.log("bjjbcjbvjv");

    this.isDisplayModal = false;
  }


}
