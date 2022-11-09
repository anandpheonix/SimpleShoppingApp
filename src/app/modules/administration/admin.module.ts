import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

const authRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'categories', component: CategoriesComponent },
            { path: 'products', component: ProductsComponent },
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    declarations: [DashboardComponent, ProductsComponent, CategoriesComponent],
    imports: [RouterModule.forChild(authRoutes)],
})
export class AdminModule {
    constructor() {
        console.log('admin module instantiated');
    }
}