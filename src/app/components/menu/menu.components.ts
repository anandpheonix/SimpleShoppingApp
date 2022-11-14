import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    // organization = 'Pheonix, Ltd';
    // totalBets = 1000;

    // updateCasinoCash(data: number) {
    //     this.totalBets = data;
    // }

    // gets called before rendering a component
    ngOnInit(): void {}

    // gets called before destroting a component
    ngOnDestroy(): void {}
}

@Component({
    selector: 'not-found',
    template:
        '<h2 style="text-align:center ; margin-top: 50px;"><strong>404. Page Not Found</strong></h2>',
})
export class NotFoundComponent {}
