import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
    categories: Category[] = [];
    formCategory: Category = { id: 0, name: '' };
    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.getAllCategories();
    }

    getAllCategories() {
        this.categoryService.getCategories().subscribe({
            next: (data) => {
                this.categories = data;
            },
            error: (err) => {
                console.log('Error occured: ' + err);
            },
        });
    }

    save() {
        if (this.formCategory.name.trim() === '') {
            window.alert('Name should not be empty');
            return;
        }

        if (this.formCategory.id === 0) {
            this.addCategory();
        } else {
            this.updateCategory();
        }

        this.formCategory = new Category(0, '');
    }

    delete(id: number) {
        this.categoryService.deleteCategory(id).subscribe({
            next: () => {
                this.getAllCategories();
            },
            error: (err) => {
                console.log('Error while deleting a record: ' + err);
            },
        });
    }

    edit(category: Category) {
        // helps use data without referencing the object
        // to avoid messing with two way binding before saving a record
        Object.assign(this.formCategory, category);
    }

    addCategory() {
        this.categoryService.addCategory(this.formCategory).subscribe({
            next: (data) => {
                this.getAllCategories();
            },
            error: (err) => {
                console.log('Error while adding a category: ' + err);
            },
        });
    }

    updateCategory() {
        this.categoryService.updateCategory(this.formCategory).subscribe({
            next: (data) => {
                this.getAllCategories();
            },
            error: (err) => {
                console.log('Error while updating a record: ' + err);
            },
        });
    }

    clear() {
        Object.assign(this.formCategory, new Category(0, ''));
    }
}
