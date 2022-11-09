import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { Routes, RouterModule } from '@angular/router';

const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogoutComponent },
];

@NgModule({
    declarations: [LoginComponent, SignupComponent, LogoutComponent],
    imports: [RouterModule.forRoot(authRoutes)],
})
export class AuthModule {
    constructor() {
        console.log('auth module instantiated');
    }
}
