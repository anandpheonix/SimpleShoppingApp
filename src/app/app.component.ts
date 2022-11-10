import { Component, OnInit, OnDestroy } from '@angular/core';

// Define a class for component
@Component({
    //specify tag name using selector - this will be used to refer this component across
    selector: 'app-root',
    // view will be defined using template
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
    // gets called when a component is created
    constructor() {
        console.log('app component created');
    }

    // gets called before rendering a component
    ngOnInit(): void {
        console.log('app component rendered');
    }

    // gets called before destroting a component
    ngOnDestroy(): void {
        console.log('app component destroyed');
    }
}
