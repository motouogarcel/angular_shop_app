
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FooterComponent, ContainerComponent, HeaderComponent, ProductComponent, ProductItemComponent, ProductListComponent]
})
export class AppComponent {
  title = 'new_angular_project';
}
