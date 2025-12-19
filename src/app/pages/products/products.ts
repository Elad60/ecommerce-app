import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Spinner } from '../../shared/spinner/spinner';
import { ProductCard } from '../../shared/product-card/product-card';
import { Product } from '../../models';

@Component({
  selector: 'app-products',
  imports: [Spinner, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  private router = inject(Router);
  products = this.productService.getProducts();

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}
