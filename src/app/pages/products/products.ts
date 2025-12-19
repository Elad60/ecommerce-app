import { Component, computed, inject, model, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Spinner } from '../../shared/spinner/spinner';
import { ProductCard } from '../../shared/product-card/product-card';
import { Category, Product } from '../../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [Spinner, ProductCard, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService);
  private router = inject(Router);
  products = this.productService.getProducts();
  searchTerm = model<string>('');
  selectedCategory = signal<Category | 'all'>('all');
  categories = ['All', ...Object.keys(Category)];

  filteredProducts = computed(() => {
    let result = this.products();
    const search = this.searchTerm()?.toLocaleLowerCase() || '';
    result = result.filter((p) => p.name.toLocaleLowerCase().includes(search) ||
    p.description.toLocaleLowerCase().includes(search)
  );

    const category = this.selectedCategory().toLocaleLowerCase();
    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }
    return result;
  });

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('all');
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}
