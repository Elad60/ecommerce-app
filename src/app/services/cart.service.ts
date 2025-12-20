import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { CartType } from '../models/cart.model';
import { Product } from '../models';

const SHIPPING_PRICE = 10;
const MAX_FREE_SHIPPING = 100;
const FREE_SHIPPING = 0;
const TAX_RATE = 0.1;
const CART_STORAGE_KEY = 'cart-items';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartType[]>([]);

  constructor() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      const loadedItems = stored ? JSON.parse(stored) : [];
      this.cartItems.set(loadedItems);
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      this.cartItems.set([]);
    }

    effect(() => {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cartItems()));
    });
  }

  itemCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
  subTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity * item.product.price, 0)
  );
  tax = computed(() => this.subTotal() * TAX_RATE);
  shipping = computed(() => (this.subTotal() < MAX_FREE_SHIPPING ? SHIPPING_PRICE : FREE_SHIPPING));
  grandTotal = computed(() => this.subTotal() + this.tax() + this.shipping());

  getCartItems(): Signal<CartType[]> {
    return this.cartItems.asReadonly();
  }
  addToCart(product: Product, quantity: number): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...items, { product, quantity }];
      }
    });
  }
  removeFromCart(productId: number): void {
    this.cartItems.update((items) => {
      return items.filter((item) => item.product.id !== productId);
    });
  }
  updateQuantity(productId: number, quantity: number = 1): void {
    this.cartItems.update((items) => {
      return items.map((item) =>
        item.product.id === productId ? { ...item, quantity: quantity } : item
      );
    });
  }
  clearCart(): void {
    this.cartItems.set([]);
  }
}
