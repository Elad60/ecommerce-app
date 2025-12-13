import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Error {
  errors = signal<string[]>([]);


  addError(error: string) : void {
    this.errors.set([...this.errors(), error]);
  }
  clearErrors() : void {
    this.errors.set([]);
  }
  getErrors = computed(() => this.errors());

}
