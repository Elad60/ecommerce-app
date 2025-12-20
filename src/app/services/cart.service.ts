import { computed, Injectable, Signal, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  getCartItems(): Signal<CartItem[]> {
    return this.cartItems.asReadonly();
  }
  itemCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
  subTotal = computed(() => this.cartItems().reduce((sum, item) => sum + (item.quantity * item.product.price), 0));

  addToCart(product: Product, quantity: number): void {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);

      if(existingItem) {
        return items.map(item => 
          item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
        )
      } else {
        return [...items, {product, quantity}]
      }
    })
  }
  removeFromCart(productId: number): void {
    this.cartItems.update(items => {
      return items.filter(item => item.product.id !== productId);
    })
  }
  updateQuantity(productId: number, quantity: number = 1): void {
    this.cartItems.update(items => {
      return items.map(item => item.product.id === productId
        ? {...item, quantity: quantity}
        : item
      )
    })
  }
  clearCart(): void {
    this.cartItems.set([]);
  }
} 

