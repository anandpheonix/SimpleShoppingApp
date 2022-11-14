import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse',
})
export class ReversePipe implements PipeTransform {
    transform(input: string) {
        return input.split('').reverse().join('');
    }
}
