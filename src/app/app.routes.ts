import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((m) => m.Auth),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail').then((m) => m.ProductDetail),
  },
];
