import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent {

  @Input() product: Product | undefined

  @Output() closeModalDisplay: EventEmitter<string> = new EventEmitter<string>()

  closeModal(){
    this.closeModalDisplay.emit();
  }

}
