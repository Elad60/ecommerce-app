import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Category, Product } from '../models';
import { MOCK_PRODUCTS } from '../data/mock-products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private products = signal<Product[]>([]);
  private apiUrl = 'https://api.example.com/products';

  loadProducts(): void {
    this.products.set(MOCK_PRODUCTS);
  }
  getProducts(): Signal<readonly Product[]> {
    return this.products.asReadonly();
  }

  getProductById(id: number): Signal<Product | undefined> {
    return computed(() => {
      const product = this.products().find(p => p.id === id);
      return product;
    })
  }
  getProductByCategory(category: Category): Signal<Product[]> {
    return computed(() => {
      const categoryProducts = this.products().filter(p => p.category === category);
      return categoryProducts;
    })
  }
}
