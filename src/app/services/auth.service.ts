import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isLoggedIn: boolean = false;
    // create instance of behaviour subject with data
    private authBS = new BehaviorSubject<boolean>(this.isLoggedIn);
    currentLoggedIn = this.authBS.asObservable();

    constructor() {}

    getLogInStatus() {
        return this.isLoggedIn;
    }
    setLogInStatus(loggedIn: boolean) {
        this.isLoggedIn = loggedIn;
        // notifying data changes
        this.authBS.next(this.isLoggedIn);
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
