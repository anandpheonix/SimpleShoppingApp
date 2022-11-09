import { Component } from '@angular/core';

// Define a class for component
@Component({
    //specify tag name using selector - this will be used to refer this component across
    selector: 'app-root',
    // view will be defined using template
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor() {
        console.log('app component initialized');
    }
}
