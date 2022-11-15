import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    adminLoggedIn: boolean = false;
    navLinks: MenuItem[];
    activeLink: MenuItem;

    constructor(private authService: AuthService) {
        this.navLinks = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: '/home',
            },
            { label: 'Shop', routerLink: '/shop' },
            {
                label: 'Admin',
                routerLink: 'admin/dashboard',
                //visible: this.adminLoggedIn,
            },
            {
                label: 'Login',
                routerLink: 'auth/login',
                //visible: !this.adminLoggedIn,
            },
            {
                label: 'Logout',
                routerLink: 'auth/logout',
                //visible: this.adminLoggedIn,
            },
            {
                label: 'Sign Up',
                routerLink: 'auth/signup',
                //visible: !this.adminLoggedIn,
            },
        ];
        this.activeLink = this.navLinks[0];
    }

    ngOnInit(): void {
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
