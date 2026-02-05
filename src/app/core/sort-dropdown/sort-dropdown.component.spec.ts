import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SortDropdownComponent } from './sort-dropdown.component';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';
import { By } from '@angular/platform-browser';

describe('SortDropdownComponent', () => {
    let component: SortDropdownComponent;
    let fixture: ComponentFixture<SortDropdownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SortDropdownComponent,
                LucideAngularModule.pick({ ChevronDown, ChevronUp })
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SortDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle dropdown', () => {
        const button = fixture.debugElement.query(By.css('.button-sort'));

        // Initial state: hidden
        expect(component.showSortDropdown()).toBeFalse();
        expect(fixture.debugElement.query(By.css('.dropdown-menu'))).toBeNull();

        // Click to show
        button.nativeElement.click();
        fixture.detectChanges();
        expect(component.showSortDropdown()).toBeTrue();
        expect(fixture.debugElement.query(By.css('.dropdown-menu'))).toBeTruthy();

        // Click to hide
        button.nativeElement.click();
        fixture.detectChanges();
        expect(component.showSortDropdown()).toBeFalse();
        expect(fixture.debugElement.query(By.css('.dropdown-menu'))).toBeNull();
    });

    it('should show updated sort label', () => {
        component.currentSort.set('Oldest');
        fixture.detectChanges();

        const label = fixture.debugElement.query(By.css('.button-sort-font'));
        expect(label.nativeElement.textContent).toContain('Oldest');
    });

    it('should emit sorted event and close dropdown on selection', fakeAsync(() => {
        spyOn(component.sorted, 'emit');

        // Open dropdown first
        component.showSortDropdown.set(true);
        fixture.detectChanges();

        const items = fixture.debugElement.queryAll(By.css('.dropdown-item'));
        const oldestItem = items.find(item => item.nativeElement.textContent.trim() === 'Oldest');

        expect(oldestItem).toBeTruthy();

        // Click 'Oldest'
        if (oldestItem) {
            oldestItem.nativeElement.click();
            fixture.detectChanges();
            tick(); // handle async applySort
        }

        expect(component.sorted.emit).toHaveBeenCalledWith({ type: 'Oldest' });
        expect(component.showSortDropdown()).toBeFalse();
        expect(component.currentSort()).toBe('Oldest');
    }));
});
