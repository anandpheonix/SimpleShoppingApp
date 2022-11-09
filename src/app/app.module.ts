// Refer NgModule Decorator
import { NgModule } from '@angular/core';
import { AdminModule } from './modules/administration/admin.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/authorization/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { ShopModule } from './modules/shopping/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import {
    HomeComponent,
    NotFoundComponent,
} from './components/menu/menu.components';
import { RouterModule, Routes } from '@angular/router';

// Define route mapping
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];

// Define a class for App Module
@NgModule({
    // Specify module dependencies
    imports: [
        AuthModule,
        ShopModule,
        AdminModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
    ],
    // Register components
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    // Specify start up component
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        console.log('app module instantiated');
    }
}
