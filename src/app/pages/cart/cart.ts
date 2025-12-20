import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../../shared/pipes/currency-pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();
  itemCount = this.cartService.itemCount;
  subTotal = this.cartService.subTotal;


  clearCart(): void {
    this.cartService.clearCart();
  }
}
