import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [],
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor() {
        this.signupForm = new FormGroup({
            username: new FormControl('', Validators.required),
            useremail: new FormControl('', Validators.required),
            userreferral: new FormControl('', Validators.required),
            userpassword: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
        });
    }

    ngOnInit(): void {}
}
