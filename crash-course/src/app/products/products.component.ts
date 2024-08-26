import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../util/product';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    const product: ProductInterface = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://myImage.jpg',
    };
    this.service.getAllProductsWithLimit().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
