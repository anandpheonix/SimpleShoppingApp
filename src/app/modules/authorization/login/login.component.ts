import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent implements OnInit {
    user: string = '';
    password: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    LoginUser() {
        if (this.authService.userIsValid(this.user, this.password)) {
            this.router.navigate(['admin/dashboard']);
            return;
        }
        this.router.navigate(['auth/loginerror']);
    }

    ngOnInit(): void {}
}
