import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { LucideAngularModule, Search } from 'lucide-angular';
import { By } from '@angular/platform-browser';

describe('SearchInputComponent', () => {
    let component: SearchInputComponent;
    let fixture: ComponentFixture<SearchInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SearchInputComponent,
                LucideAngularModule.pick({ Search })
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render search icon', () => {
        const icon = fixture.debugElement.query(By.css('lucide-icon'));
        expect(icon).toBeTruthy();
        expect(icon.attributes['ng-reflect-name']).toBeDefined(); // or check specific implementation detail if needed
    });

    it('should emit updated event on input', () => {
        spyOn(component.updated, 'emit');
        const input = fixture.debugElement.query(By.css('input'));
        const event = new Event('input');

        input.nativeElement.dispatchEvent(event);

        expect(component.updated.emit).toHaveBeenCalledWith(event);
    });
});
