import { Component, input, output } from '@angular/core';
import { Product } from '../../models';
import { CurrencyPipe } from '../pipes/currency-pipe';
import { Card } from '../card/card';

@Component({
  selector: 'app-product-card',
  imports: [Card, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  productClick = output<Product>();

  onCardClick(): void {
    this.productClick.emit(this.product());
  }
}
