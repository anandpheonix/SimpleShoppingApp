import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedIn: boolean = false;
    constructor() {}

    getLogInStatus() {
        return this.isLoggedIn;
    }
    setLogInStatus(loggedIn: boolean) {
        this.isLoggedIn = loggedIn;
    }

    userIsValid(username: string, password: string): boolean {
        if (username == 'Pheonix' && password == 'Admin') {
            this.setLogInStatus(true);
            return true;
        }
        this.setLogInStatus(false);
        return false;
    }
}
