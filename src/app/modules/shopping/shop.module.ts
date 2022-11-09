import { NgModule } from '@angular/core';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ItemlistComponent],
    imports: [
        RouterModule.forRoot([{ path: 'shop', component: ItemlistComponent }]),
    ],
})
export class ShopModule {
    constructor() {
        console.log('shop module instantiated');
    }
}
