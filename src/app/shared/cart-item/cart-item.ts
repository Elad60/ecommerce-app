import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '../pipes/currency-pipe';
import { CartType } from '../../models';


@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  cartItem = input.required<CartType>();
  quantityChange = output<{ productId: number; quantity: number }>();
  removeItem = output<number>();

  increaseQty(): void {
    const item = this.cartItem();

    this.quantityChange.emit({
      productId: item.product.id,
      quantity: item.quantity + 1,
    });
  }
  decreaseQty(): void {
    const item = this.cartItem();
    if (item.quantity > 1) {
      this.quantityChange.emit({
        productId: item.product.id,
        quantity: item.quantity - 1,
      });
    }
  }
  removeCartItem(): void {
    this.removeItem.emit(this.cartItem().product.id);
  }
}
