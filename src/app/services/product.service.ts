import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private url = environment.apiBaseUrl + '/products';
    constructor(private dataService: DataService) {}

    getProducts() {
        return this.dataService
            .readData(this.url)
            .pipe(map((response) => response as Product[]));
    }

    addProduct(newCategory: Product) {
        return this.dataService
            .createData(this.url, newCategory)
            .pipe(map((response) => response as Product));
    }

    updateProduct(modifiedCategory: Product) {
        return this.dataService
            .updateData(this.url, modifiedCategory)
            .pipe(map((response) => response as Product));
    }

    deleteProduct(id: number) {
        return this.dataService.deleteData(this.url, id);
    }
}
