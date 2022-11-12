import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Injectable({
    providedIn: 'root',
})
export class CartService implements OnInit {
    private cartItems: Cart[] = JSON.parse(
        localStorage.getItem('itemsInCart') || ''
    );

    constructor() {}

    ngOnInit() {}

    getCartItems() {
        return this.cartItems;
    }

    addCartItem(data: Cart) {
        this.cartItems.push(data);
        console.log(this.cartItems);
        this.updateLocalStorage();
    }

    updateCartItem(data: Cart) {
        console.log(
            'inside update with quanity: ' +
                data.quantity +
                'for item: ' +
                data.name
        );
        let updatedCartItems = this.cartItems.map((item) => {
            if (item.id === data.id) {
                return { ...item, quantity: data.quantity };
            }
            return item;
        });
        this.cartItems = updatedCartItems;
        this.updateLocalStorage();
    }

    deleteCartItem(id: number) {
        this.cartItems.splice(id, 1);
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('itemsInCart', JSON.stringify(this.cartItems));
    }
}
