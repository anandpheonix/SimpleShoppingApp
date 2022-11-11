import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styles: [],
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    formProduct: Product = { id: 0, name: '', price: 0, description: '' };
    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.getAllProducts();
    }

    getAllProducts() {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.products = data;
            },
            error: (err) => {
                console.log('Error occured: ' + err);
            },
        });
    }

    save() {
        if (this.formProduct.name === '' || this.formProduct.price === 0) {
            window.alert('Name & Price should not be empty');
            return;
        }

        if (this.formProduct.id === 0) {
            this.addProduct();
        } else {
            this.updateProduct();
        }

        this.formProduct = new Product(0, '', 0, '');
    }

    delete(id: number) {
        this.productService.deleteProduct(id).subscribe({
            next: () => {
                this.getAllProducts();
            },
            error: (err) => {
                console.log('Error while deleting a record: ' + err);
            },
        });
    }

    edit(product: Product) {
        // helps use data without referencing the object
        // to avoid messing with two way binding before saving a record
        Object.assign(this.formProduct, product);
    }

    addProduct() {
        this.productService.addProduct(this.formProduct).subscribe({
            next: (data) => {
                this.getAllProducts();
            },
            error: (err) => {
                console.log('Error while adding a product: ' + err);
            },
        });
    }

    updateProduct() {
        this.productService.updateProduct(this.formProduct).subscribe({
            next: (data) => {
                this.getAllProducts();
            },
            error: (err) => {
                console.log('Error while updating a record: ' + err);
            },
        });
    }

    clear() {
        Object.assign(this.formProduct, new Product(0, '', 0, ''));
    }
}
