import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSearchPipe } from './filter-search.pipe';
import { InputFormatDirective } from './textinput.directive';

@NgModule({
    declarations: [FilterSearchPipe, InputFormatDirective],
    imports: [CommonModule],
    exports: [FilterSearchPipe, InputFormatDirective],
})
export class SharedModule {}
