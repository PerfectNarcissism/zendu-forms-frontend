import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteComponent } from './delete.component';
import { By } from '@angular/platform-browser';

describe('DeleteComponent', () => {
    let component: DeleteComponent;
    let fixture: ComponentFixture<DeleteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DeleteComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(DeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not render modal by default', () => {
        // Create a new component instance to ensure default state
        fixture = TestBed.createComponent(DeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        const modal = fixture.debugElement.query(By.css('.modal-overlay'));
        expect(modal).toBeNull();
    });

    it('should render modal when isOpen is true', () => {
        fixture.componentRef.setInput('isOpen', true);
        fixture.detectChanges();

        const modal = fixture.debugElement.query(By.css('.modal-overlay'));
        expect(modal).toBeTruthy();
    });

    it('should display correct title and message', () => {
        const testTitle = 'Delete Item';
        const testMessage = 'Are you sure?';

        fixture.componentRef.setInput('isOpen', true);
        fixture.componentRef.setInput('title', testTitle);
        fixture.componentRef.setInput('message', testMessage);
        fixture.detectChanges();

        const titleEl = fixture.debugElement.query(By.css('h3'));
        const messageEl = fixture.debugElement.query(By.css('p'));

        expect(titleEl.nativeElement.textContent).toContain(testTitle);
        expect(messageEl.nativeElement.textContent).toContain(testMessage);
    });

    it('should emit confirmed event', () => {
        spyOn(component.confirmed, 'emit');
        fixture.componentRef.setInput('isOpen', true);
        fixture.detectChanges();

        const confirmBtn = fixture.debugElement.query(By.css('.btn-confirm'));
        confirmBtn.nativeElement.click();

        expect(component.confirmed.emit).toHaveBeenCalled();
    });

    it('should emit closed event', () => {
        spyOn(component.closed, 'emit');
        fixture.componentRef.setInput('isOpen', true);
        fixture.detectChanges();

        const cancelBtn = fixture.debugElement.query(By.css('.btn-cancel'));
        cancelBtn.nativeElement.click();

        expect(component.closed.emit).toHaveBeenCalled();
    });
});
