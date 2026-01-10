import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/admin/admin-products/admin-products').then((m) => m.AdminProducts),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./pages/admin/admin-product-form/admin-product-form').then(
            (m) => m.AdminProductForm
          ),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./pages/admin/admin-product-form/admin-product-form').then(
            (m) => m.AdminProductForm
          ),
      },
    ],
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/admin/admin-users/admin-users').then((m) => m.AdminUsers),
  },
];
