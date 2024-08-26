import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from '../../../../util/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit = 5) {
    const productsUrl = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductInterface[]>(productsUrl);
  }

  addProduct(product: ProductInterface) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductInterface>(productsUrl, product);
  }
}
