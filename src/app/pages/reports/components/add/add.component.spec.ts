import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AddComponent', () => {
    let component: AddComponent;
    let fixture: ComponentFixture<AddComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AddComponent, RouterTestingModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const title = fixture.debugElement.query(By.css('h2'));
        expect(title.nativeElement.textContent).toContain('Create a new report');
    });

    it('should have basic inputs', () => {
        const input = fixture.debugElement.query(By.css('input.form-input'));
        const select = fixture.debugElement.query(By.css('select.form-select'));

        expect(input).toBeTruthy();
        expect(select).toBeTruthy();
    });

    it('should have cancel and create buttons', () => {
        const cancelBtn = fixture.debugElement.query(By.css('.btn-cancel'));
        const createBtn = fixture.debugElement.query(By.css('.btn-create'));

        expect(cancelBtn).toBeTruthy();
        expect(createBtn).toBeTruthy();

        // Check router link attributes (note: actual navigation check usually requires RouterTestingModule harness or checking attributes)
        expect(cancelBtn.attributes['ng-reflect-router-link']).toBe('/reports');
        expect(createBtn.attributes['ng-reflect-router-link']).toBe('/reports');
    });
});
