import { Component, input } from '@angular/core';

type VariantType = 'primary' | 'secondary' | 'danger';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  variant = input<VariantType>('primary')
  isDisabled = input<boolean>(false);

}
