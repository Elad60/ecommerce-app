import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrength(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const errors: ValidationErrors = {};

    if (value.length < 8) {
      errors['minLength'] = {
        requiredLength: 8,
        actualLength: value.length,
        message: 'Password must be at least 8 characters long',
      };
    }
    if (!/[A-Z]/.test(value)) {
      errors['uppercase'] = {
        message: 'Password must contain at least one uppercase letter',
      };
    }
    if (!/[a-z]/.test(value)) {
      errors['lowercase'] = {
        message: 'Password must contain at least one lowercase letter',
      };
    }
    if(!/[0-9]/.test(value)) {
        errors['number'] = {
          message: 'Password must contain at least one number',
        };
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };
}
