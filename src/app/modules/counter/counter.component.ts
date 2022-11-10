import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styles: [],
})
export class CounterComponent implements OnInit {
    @Input() //receive data from parent component
    bet: number = 0;

    @Output()
    cashUpdateEvent = new EventEmitter();

    constructor() {}

    raiseStake(): void {
        this.bet += 100;
        this.cashUpdateEvent.emit(this.bet);
    }

    dropStake(): void {
        this.bet -= 100;
        this.cashUpdateEvent.emit(this.bet);
    }

    ngOnInit(): void {}
}
