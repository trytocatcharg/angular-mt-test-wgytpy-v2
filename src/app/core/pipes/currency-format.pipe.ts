import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format',
    standalone: true
})

export class CurrencyFormatPipe implements PipeTransform {
    transform(value: number) {
        const currencyValue = +value;

        return  +currencyValue.toFixed(6);
    }
}