import { Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  emailAvailableValidator,
  passwordMatch,
  passwordStrength,
  usernameAvailableValidator,
} from '../../../shared/validators';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

const initialValue = '';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authService = inject(AuthService);
  router = inject(Router);
  registerForm = new FormGroup({
    userName: new FormControl(initialValue, [Validators.required], [usernameAvailableValidator()]),
    email: new FormControl(initialValue, [Validators.required], [emailAvailableValidator()]),
    passwordsGroup: new FormGroup(
      {
        password: new FormControl(initialValue, [Validators.required, passwordStrength()]),
        confirmPassword: new FormControl(initialValue, [Validators.required]),
      },
      { validators: passwordMatch('password', 'confirmPassword') }
    ),
  });

  getControl(path: string) {
    return this.registerForm.get(path);
  }
  hasError(path: string, error: string): boolean {
    const control = this.getControl(path);
    return !!(control?.hasError(error) && control?.touched);
  }
  formStatus = toSignal(this.registerForm.statusChanges, {
    initialValue: this.registerForm.status,
  });
  isFormValid = computed(() => {
    return this.formStatus() === 'VALID';
  });
  isFormPending = computed(() => this.formStatus() === 'PENDING');
  onSubmit(): void {
    if (this.registerForm.valid) {
      const { userName, email, passwordsGroup } = this.registerForm.value;
      const password = passwordsGroup?.password;
      if (!userName || !email || !password) {
        return;
      }
      this.authService.register(userName, email, password);
      this.router.navigate(['/products']);
      console.log('Form submitted:', this.registerForm.value);
    }
  }
}
