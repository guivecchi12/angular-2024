import { Component } from '@angular/core';
import { ProductInterface } from '../../util/product';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  product: ProductInterface = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.addProduct(this.product).subscribe({
      next: (result) => {
        this.router.navigate(['products']);
      },
    });
  }
}
