import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('Counter component tests', () => {
    let component: any;
    let fixture: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CounterComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should verify instance of component', () => {
        expect(fixture).toBeDefined();
    });

    it('should create an the component', () => {
        expect(component).toBeTruthy();
    });

    it('should verify data member value', () => {
        expect(component.bet).toEqual(0);
    });
});
