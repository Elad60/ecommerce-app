import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm = new FormGroup({
    shipping: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
    }),
    payment: new FormGroup({
      cardNumber: new FormControl(''),
      cardName: new FormControl(''),
      expiryDate: new FormControl(''),
      cvv: new FormControl(''),
    }),
  });

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      console.log('Form submitted:', this.checkoutForm.value);
    }
  }
}
