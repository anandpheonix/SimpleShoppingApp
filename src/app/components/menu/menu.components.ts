import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<h2>Welcome again</h2>
        <app-counter></app-counter>`,
})
export class HomeComponent {}

@Component({
    selector: 'not-found',
    template: '<h2><strong>404. Page Not Found</strong></h2>',
})
export class NotFoundComponent {}
