import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const snackBar = inject(MatSnackBar);

  if (!authService.isAuthenticated()) {
    snackBar.open('Please login to access this page', 'Close', {
      duration: 3000,
    });
    return router.createUrlTree(['/auth/login'])
  }
  return true;
};
