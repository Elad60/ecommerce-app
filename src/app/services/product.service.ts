import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Category, Product } from '../models';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private products = signal<Product[]>([]);
  private apiUrl = '/assets/products.json';

  constructor() {
    this.loadProducts();
  }
  async loadProducts(): Promise<void> {
    try {
      const products = await firstValueFrom(this.http.get<Product[]>(this.apiUrl));
      this.products.set(products);
    } catch (error) {
      this.products.set(MOCK_PRODUCTS);
      console.error('Failed to load products:', error);
    }
  }
  getProducts(): Product[] {
    return this.products();
  }

  getProductById(id: number): Product | null {
    const product = this.products().find((p) => p.id === id);
    if (!product) {
      return null;
    }
    return product;
  }
  getProductByCategory(category: Category): Signal<Product[]> {
    return computed(() => {
      const categoryProducts = this.products().filter((p) => p.category === category);
      return categoryProducts;
    });
  }
  createProduct(product: Product): void {
    const newId =
      this.products().length > 0 ? Math.max(...this.products().map((p) => p.id)) + 1 : 1;
    const newProduct = { ...product, id: newId };
    this.products.update((products) => [...products, newProduct]);
  }
  updateProduct(product: Product, productId: number): void {
    this.products.update((products) => products.map(p => p.id === productId ? product : p) )
  }
  deleteProduct(productId: number): void {
    this.products.update((products) => products.filter(p => p.id !== productId))
  }
}
