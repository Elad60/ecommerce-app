import { AfterViewInit, Component, effect, inject, signal, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-products',
  imports: [
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'imageUrl',
    'category',
    'inStock',
    'rating',
    'actions',
  ];
  productService = inject(ProductService);
  router = inject(Router);
  products = signal<Product[]>(this.productService.getProducts());
  dataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatSort) sort!: MatSort;
  constructor() {
    effect(() => {
      this.dataSource.data = this.products();
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  onAddNew(): void {
    this.router.navigate(['/admin/products/new'])
  }
  onEdit(productId: number): void {
    this.router.navigate(['/admin/products', productId, 'edit'])
  }
  onDelete(productId: number): void {
    if(confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId);
    }
  }
}
