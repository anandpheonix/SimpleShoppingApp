import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-infopopup',
    templateUrl: './infopopup.component.html',
    styleUrls: ['./infopopup.component.css'],
})
export class InfopopupComponent implements OnInit {
    message: string;
    constructor(
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
        this.message = data.message;
    }

    ngOnInit(): void {}

    close() {
        this.dialog.closeAll();
    }
}
