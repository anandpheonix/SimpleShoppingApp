import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    userIsLoggedIn: boolean = false;
    userIsAdmin: boolean = false;
    adminLoggedIn: boolean = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.adminLoggedIn = this.authService.getLogInStatus();
    }
}
