import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardNumberFormatter'
})
export class CreditCardNumberFormatterPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {
    return value?.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

}
