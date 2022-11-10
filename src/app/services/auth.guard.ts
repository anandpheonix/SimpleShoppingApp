import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

// route guard that can be used to guard routes
@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate(): boolean {
        let flag = false;
        this.authService.currentLoggedIn.subscribe({
            next: (data) => {
                flag = data;
            },
        });
        return flag;
    }
}
