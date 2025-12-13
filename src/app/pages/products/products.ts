import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Spinner } from '../../shared/spinner/spinner';
import { Card } from '../../shared/card/card';
import { CurrencyPipe } from '../../shared/pipes/currency-pipe';

@Component({
  selector: 'app-products',
  imports: [Spinner,Card, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productService = inject(ProductService);
  products = this.productService.getProducts();

  ngOnInit(): void {
    this.productService.loadProducts();
    console.log(this.products());
  }
}
