import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const authRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'categories', component: CategoriesComponent },
            { path: 'products', component: ProductsComponent },
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    declarations: [DashboardComponent, ProductsComponent, CategoriesComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(authRoutes)],
})
export class AdminModule {
    constructor() {
        console.log('admin module instantiated');
    }
}
