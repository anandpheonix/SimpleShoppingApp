import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-logout',
    template: ` <p>Logout successful!</p>
        Login again <a routerLink="/auth/login">here</a>`,
    styles: [],
})
export class LogoutComponent implements OnInit {
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.setLogInStatus(false);
        localStorage.setItem(
            'loginCache',
            JSON.stringify({ user: 'Pheonix', loggedIn: false })
        );
    }
}
