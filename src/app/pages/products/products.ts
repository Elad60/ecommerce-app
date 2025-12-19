import { Component, computed, inject, model, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Spinner } from '../../shared/spinner/spinner';
import { ProductCard } from '../../shared/product-card/product-card';
import { Category, Product } from '../../models';
import { FormsModule } from '@angular/forms';
import { SortOption } from '../../models/product.model';

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
  sortBy = signal<SortOption>('default');

  sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A-Z' },
    { value: 'name-desc', label: 'Name: Z-A' },
  ];

  displayedProducts = computed(() => {
    let result: Product[] = [...this.products()];
    const search = this.searchTerm()?.toLocaleLowerCase() || '';
    result = result.filter(
      (p) =>
        p.name.toLocaleLowerCase().includes(search) ||
        p.description.toLocaleLowerCase().includes(search)
    );

    const category = this.selectedCategory().toLocaleLowerCase();
    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    const sort = this.sortBy();

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  });

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('all');
    this.sortBy.set('default');
  }

  onProductClick(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}
