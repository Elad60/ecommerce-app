import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function usernameAvailableValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    // Mock list of taken usernames
    const takenUsernames = ['admin', 'user', 'test'];

    // Simulate API call with 500ms delay
    return of(control.value).pipe(
      delay(500),
      map(username => {
        const isTaken = takenUsernames.includes(username.toLowerCase());
        return isTaken ? { usernameTaken: true } : null;
      })
    );
  };
}