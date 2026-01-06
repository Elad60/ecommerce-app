import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/admin/admin-products/admin-products').then((m) => m.AdminProducts),
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/admin/admin-users/admin-users').then((m) => m.AdminUsers),
  },
];