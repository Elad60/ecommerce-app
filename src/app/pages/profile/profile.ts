import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  authService = inject(AuthService);
  currentUser = this.authService.currentUser();
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  profileForm = new FormGroup({
    userName: new FormControl(this.currentUser?.username, Validators.required),
    email: new FormControl(this.currentUser?.email, [Validators.required, Validators.email]),
  });

  formStatus = toSignal(this.profileForm.statusChanges, {
    initialValue: this.profileForm.status,
  });
  formValue = toSignal(this.profileForm.valueChanges, {
    initialValue: this.profileForm.value,
  });
  isFormValid = computed(() => this.formStatus() === 'VALID');
  isFormPending = computed(() => {
    return this.formStatus() === 'PENDING';
  });

  onSubmit() {
    if (this.profileForm.valid) {
      const { userName, email } = this.profileForm.value;
      this.authService.updateUser(userName!, email!);
      this.successMessage.set('Profile updated successfully!');
      this.profileForm.markAsPristine();
      setTimeout(() => this.successMessage.set(null), 3000);
    }
  }
}
