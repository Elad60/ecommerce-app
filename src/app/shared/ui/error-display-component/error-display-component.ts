import { Component, computed, inject } from '@angular/core';
import { Error } from '../../../services/error';

@Component({
  selector: 'app-error-display',
  imports: [],
  templateUrl: './error-display-component.html',
  styleUrl: './error-display-component.css',
})
export class ErrorDisplayComponent {
  errorService = inject(Error);
  errors = this.errorService.errors
  hasErrors = computed(() => this.errorService.getErrors().length > 0)


  clearErrors(): void {
    this.errorService.clearErrors();
  }
}
