import { Component, effect, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { Spinner } from '../../shared/spinner/spinner';
import { CurrencyPipe } from '../../shared/pipes/currency-pipe';

@Component({
  selector: 'app-product-detail',
  imports: [Spinner, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  id = input.required<string>();
  product = signal<Product | null>(null);
  productService = inject(ProductService);
  router = inject(Router);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor() {
    effect(() => {
      this.loading.set(true);
      this.error.set(null);

      const product = this.productService.getProductById(Number(this.id()));

      if (!product) {
        this.error.set('Product not found');
        this.product.set(null);
      } else {
        this.product.set(product);
      }

      this.loading.set(false);
    });
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
}
