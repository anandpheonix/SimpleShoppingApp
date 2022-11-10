import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginErrorComponent } from './loginerror/loginerror.component';

const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'loginerror', component: LoginErrorComponent },
];

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        LogoutComponent,
        LoginErrorComponent,
    ],
    imports: [RouterModule.forChild(authRoutes), FormsModule],
})
export class AuthModule {
    constructor() {
        console.log('auth module instantiated');
    }
}
