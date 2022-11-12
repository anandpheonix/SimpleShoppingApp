import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styles: [],
})
export class CartComponent implements OnInit {
    productsInCart: Cart[] = [];

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.productsInCart = this.cartService.getCartItems();
    }

    deleteFromCart(id: number) {
        this.cartService.deleteCartItem(id);
    }

    updateItem(id: number) {
        if (this.productsInCart[id].quantity === 0)
            this.cartService.deleteCartItem(id);
        this.cartService.updateLocalStorage();
    }

    getCartTotal() {
        let total = 0;

        for (let product of this.productsInCart) {
            total += product.price * product.quantity;
        }

        return total;
    }
}
