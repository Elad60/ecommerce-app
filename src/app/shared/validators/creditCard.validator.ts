import { AbstractControl, ValidatorFn } from '@angular/forms';

export function creditCardValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!value) {
      return null; // Don't validate empty values
    }

    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');

    // Check if it has valid length (13-19 digits for most card types)
    if (digits.length < 13 || digits.length > 19) {
      return { invalidCreditCard: true };
    }

    // Luhn algorithm implementation
    let sum = 0;
    let isEven = false;

    // Loop through digits from right to left
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i], 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    // Valid if sum is divisible by 10
    const isValid = sum % 10 === 0;

    if (!isValid) {
      return { invalidCreditCard: true };
    }

    return null;
  };
}