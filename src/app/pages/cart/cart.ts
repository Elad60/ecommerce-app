import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../shared/pipes/currency-pipe';
import { RouterLink } from "@angular/router";
import { CartItem } from '../../shared/cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink, CartItem],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();
  itemCount = this.cartService.itemCount;
  subTotal = this.cartService.subTotal;
  tax = this.cartService.tax;
  shipping = this.cartService.shipping;
  grandTotal = this.cartService.grandTotal;

  clearCart(): void {
    this.cartService.clearCart();
  }

  onChangeQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }
  onRemove(productId: number): void {
    this.cartService.removeFromCart(productId)
  }
}
