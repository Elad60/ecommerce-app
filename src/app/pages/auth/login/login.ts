import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

const initialValue = '';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);
  loginForm = new FormGroup({
    userName: new FormControl(initialValue, Validators.required),
    password: new FormControl(initialValue, Validators.required),
  });

  getControl(path: string) {
    return this.loginForm.get(path);
  }
  hasError(path: string, error: string): boolean {
    const control = this.getControl(path);
    return !!(control?.hasError(error) && control?.touched);
  }

  formStatus = toSignal(this.loginForm.statusChanges, {
    initialValue: this.loginForm.status,
  });
  isFormValid = computed(() => this.formStatus() === 'VALID');

  onSubmit() {
    if (this.loginForm.valid) {
      const { userName, password } = this.loginForm.value;

      this.authService.login(userName!, password!);
      this.router.navigate(['/products'])
      console.log(this.loginForm.value);
    }
  }
}
