import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Auth } from './pages/auth/auth';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'products', component: Products},
    { path: 'cart', component: Cart},
    { path: 'auth', component: Auth},
];
