import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    // organization = 'Pheonix, Ltd';
    // totalBets = 1000;

    // updateCasinoCash(data: number) {
    //     this.totalBets = data;
    // }

    // videourl = 'https://www.youtube.com/embed/K4DyBUG242c';
    // safeurl: any = null;

    constructor(private sanitizer: DomSanitizer) {
        // this.safeurl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //     this.videourl
        // );
    }
}

@Component({
    selector: 'not-found',
    template:
        '<h2 style="text-align:center ; margin-top: 50px;"><strong>404. Page Not Found</strong></h2>',
})
export class NotFoundComponent {}
