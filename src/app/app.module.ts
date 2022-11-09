// Refer NgModule Decorator
import { NgModule } from '@angular/core';
import { AdminModule } from './administration/app.module';
import { AppComponent } from './app.component';
import { AuthModule } from './authorization/auth.module';
import { HeaderComponent } from './header.component';
import { ShopModule } from './shopping/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent, NotFoundComponent } from './menu.components';
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
