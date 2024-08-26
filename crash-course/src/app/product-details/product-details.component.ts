import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../util/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  @Input()
  product: ProductInterface = {};
}
