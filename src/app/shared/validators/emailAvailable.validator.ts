import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailAvailableValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    // Mock list of taken emails
    const takenEmails = ['admin@example.com', 'test@example.com'];

    // Simulate API call with 500ms delay
    return of(control.value).pipe(
      delay(500),
      map(email => {
        const isTaken = takenEmails.includes(email.toLowerCase());
        return isTaken ? { emailTaken: true } : null;
      })
    );
  };
}