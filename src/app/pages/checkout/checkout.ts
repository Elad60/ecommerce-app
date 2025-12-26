import { Component, computed, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { creditCardValidator } from '../../shared/validators';
import { toSignal } from '@angular/core/rxjs-interop';
import { Spinner } from '../../shared/spinner/spinner';

const initialValue = '';
@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule,Spinner],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm = new FormGroup({
    shipping: new FormGroup({
      firstName: new FormControl(initialValue, Validators.required),
      lastName: new FormControl(initialValue, Validators.required),
      email: new FormControl(initialValue, [Validators.required, Validators.email]),
      address: new FormControl(initialValue, Validators.required),
      city: new FormControl(initialValue, Validators.required),
      state: new FormControl(initialValue, Validators.required),
      zipCode: new FormControl(initialValue, [Validators.required, Validators.pattern(/^\d{5}$/)]),
    }),
    payment: new FormGroup({
      cardNumber: new FormControl(initialValue, [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(19),
        creditCardValidator(),
      ]),
      cardName: new FormControl(initialValue, Validators.required),
      expiryDate: new FormControl(initialValue, [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ]),
      cvv: new FormControl(initialValue, [Validators.required, Validators.pattern(/^\d{3,4}$/)]),
    }),
  });

  formValue = toSignal(this.checkoutForm.valueChanges, {
    initialValue: this.checkoutForm.value
  })
  formStatus = toSignal(this.checkoutForm.statusChanges, {
    initialValue: this.checkoutForm.status
  })

  isFormValid = computed(() => {
    return this.formStatus() === 'VALID'
  })
  isFormPending = computed(() => {
    return this.formStatus() === 'PENDING'
  })
  isFormDirty = computed(() => {
    this.formValue()
    return this.checkoutForm.dirty;
  })
  getControl(path: string) {
    return this.checkoutForm.get(path);
  }
  hasError(path: string, error: string): boolean {
    const control = this.getControl(path);
    return !!(control?.hasError(error) && control?.touched);
  }
  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Form submitted:', this.checkoutForm.value);
    }
  }
}

