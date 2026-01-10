import { Component, computed, effect, inject, input, numberAttribute } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.css',
})
export class AdminProductForm {
  private readonly MIN_PRICE = 0.01;
  private readonly MIN_RATING = 0;
  private readonly MAX_RATING = 5;
  private readonly DEFAULT_RATING = 0;

  formFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'price', label: 'Price', type: 'number', step: '0.01' },
    { name: 'imageUrl', label: 'Image URL', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'inStock', label: 'In Stock', type: 'checkbox' },
    { name: 'rating', label: 'Rating', type: 'number', min: '0', max: '5', step: '0.1' },
  ];

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private productService = inject(ProductService);
  id = input(0, { transform: numberAttribute });
  product = computed(() => {
    const productId = this.id();
    return productId ? this.productService.getProductById(productId) : null;
  });
  isEditMode = computed(() => !!this.id());
  title = computed(() => (this.isEditMode() ? 'Edit Product' : 'Create Product'));
  adminProductsForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.min(this.MIN_PRICE), Validators.required]],
    imageUrl: ['', Validators.required],
    category: ['', Validators.required],
    inStock: [true, Validators.required],
    rating: [
      this.DEFAULT_RATING,
      [Validators.min(this.MIN_RATING), Validators.max(this.MAX_RATING)],
    ],
  });

  constructor() {
    effect(() => {
      const product = this.product();
      if (product) {
        this.adminProductsForm.patchValue(product);
      } else {
        this.adminProductsForm.reset();
      }
    });
  }
  onSubmit(): void {
    if(this.adminProductsForm.invalid) {
      return;
    }

    const product = this.adminProductsForm.value as Product;
      if(this.isEditMode()) {
        this.productService.updateProduct(product, this.id()!)
      } else {
        this.productService.createProduct(product)
      }
      this.router.navigate(['/admin/products'])
  }
}
