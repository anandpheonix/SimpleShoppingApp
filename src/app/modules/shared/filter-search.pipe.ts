import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
    transform(input: any[], searchVar: string, searchCol: string) {
        if (searchVar == undefined || searchCol == undefined || searchVar == '')
            return input;

        return input.filter(
            (x) =>
                x[searchCol].toLowerCase().indexOf(searchVar.toLowerCase()) > -1
        );
    }
}
