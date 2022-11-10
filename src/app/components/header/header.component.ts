import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    adminLoggedIn: boolean = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        //this.adminLoggedIn = this.authService.getLogInStatus();
        this.authService.currentLoggedIn.subscribe({
            next: (data) => {
                this.adminLoggedIn = data;
            },
            error: (err) => {
                console.log('Error occured:' + err);
            },
        });
    }
}
