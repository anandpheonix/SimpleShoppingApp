import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { InfopopupComponent } from 'src/app/shared/components/infopopup/infopopup.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { SortEvent } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    providers: [MessageService],
})
export class ProductsListComponent implements OnInit, AfterViewInit {
    products: Product[] = [];
    searchString: string = '';
    productList: any;
    displayModal = false;
    first = 0;
    rows = 10;
    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private messageService: MessageService,
        private dialog: MatDialog
    ) {}

    @ViewChild(MatSort)
    sort!: MatSort;

    ngAfterViewInit() {
        this.productList.sort = this.sort;
    }

    ngOnInit(): void {
        this.getAllProducts();
        this.productList = new MatTableDataSource(this.products);
    }

    getAllProducts() {
        this.productService.getProducts().subscribe({
            next: (data) => (this.products = data),
            error: (err) => console.log('Error get products: ' + err),
        });
    }

    onAddItem() {
        this.messageService.add({
            severity: 'info',
            summary: 'Item added to cart',
        });
    }

    onTabOpen(event: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'Tab Expanded',
            detail: 'Index: ' + event.index,
        });
    }

    addToCart(product: Product) {
        this.onAddItem();
        let newCartItem: Cart = new Cart(
            product.id,
            product.name,
            product.price,
            1
        );
        let itemQuantityInCart = this.getItemQuantityInCart(newCartItem.id);
        if (itemQuantityInCart != 0) {
            // this.dialog.open(InfopopupComponent, {
            //     data: { message: 'Item already in cart' },
            // });
        } else {
            this.cartService.addCartItem(newCartItem);
            this.displayModal = true;
            // this.dialog.open(InfopopupComponent, {
            //     data: { message: 'Item added to cart' },
            // });
        }
    }

    getItemQuantityInCart(id: number) {
        let currentCartItems = this.cartService.getCartItems();
        let itemQuantityInCart = 0;
        currentCartItems.forEach((item) => {
            if (item.id === id) {
                itemQuantityInCart = item.quantity;
            }
        });
        return itemQuantityInCart;
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPageOrDataLimit(): boolean {
        if (this.products.length < this.rows) return true;
        return this.products
            ? this.first === this.products.length - this.rows
            : true;
    }

    isFirstPage(): boolean {
        return this.products ? this.first === 0 : true;
    }
}
