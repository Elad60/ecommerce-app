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

  constructor() {
    this.loadProducts();
  }
  loadProducts(): void {
    this.products.set(MOCK_PRODUCTS);
  }
  getProducts(): Signal<readonly Product[]> {
    return this.products.asReadonly();
  }

  getProductById(id: number): Product | null{
      const product = this.products().find(p => p.id === id);
      if(!product) {
        return null;
      }
      return product;
  }
  getProductByCategory(category: Category): Signal<Product[]> {
    return computed(() => {
      const categoryProducts = this.products().filter(p => p.category === category);
      return categoryProducts;
    })
  }
}
