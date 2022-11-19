import { NgModule } from '@angular/core';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [ItemlistComponent, ProductsListComponent, CartComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatTableModule,
        TableModule,
        ButtonModule,
        MessagesModule,
        DialogModule,
        MatDividerModule,
        RouterModule.forRoot([{ path: 'shop', component: ItemlistComponent }]),
    ],
})
export class ShopModule {
    constructor() {
        console.log('shop module instantiated');
    }
}
