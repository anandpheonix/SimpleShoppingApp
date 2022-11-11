// Refer NgModule Decorator
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopModule } from './modules/shopping/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import {
    HomeComponent,
    NotFoundComponent,
} from './components/menu/menu.components';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CounterModule } from './modules/counter/counter.module';
import { HttpClientModule } from '@angular/common/http';

// Define route mapping
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        //lazy loading
        path: 'admin',
        loadChildren: () =>
            import('./modules/administration/admin.module').then(
                (x) => x.AdminModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/authorization/auth.module').then(
                (x) => x.AuthModule
            ),
    },
    { path: '**', component: NotFoundComponent },
];

// Define a class for App Module
@NgModule({
    // Specify module dependencies
    imports: [
        ShopModule,
        CounterModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        HttpClientModule,
    ],
    // Register components
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NotFoundComponent,
        FooterComponent,
    ],
    // Specify start up component
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        console.log('app module instantiated');
    }
}
