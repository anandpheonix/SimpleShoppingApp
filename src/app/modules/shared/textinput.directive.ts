import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[inputFormat]',
})
export class InputFormatDirective {
    @Input()
    format = '';

    constructor(private e: ElementRef) {
        this.e.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('focus')
    handleFocus() {
        this.e.nativeElement.style.backgroundColor = 'cyan';
    }

    @HostListener('focusout')
    handleFocusout() {
        this.e.nativeElement.style.backgroundColor = 'pink';
    }

    @HostListener('blur')
    handleBlur() {
        let value = this.e.nativeElement.value;
        console.log('in blur');
        if (this.format === 'lowercase') {
            this.e.nativeElement.value = value.toLowerCase();
            return;
        }
        this.e.nativeElement.value = value.toUpperCase();
        return;
    }
}
