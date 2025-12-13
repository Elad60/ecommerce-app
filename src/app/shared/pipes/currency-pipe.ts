import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencySymbol: string = '$'): string {
    if (value === null || value === undefined) {
      return '';
    }

    const formattedNumber = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return `${currencySymbol}${formattedNumber}`
  }

}
