import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReportsComponent } from './reports.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LucideAngularModule, Search, Plus, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ChartPieIcon, PencilIcon, TrashIcon } from 'lucide-angular';
import { ReportTypeString } from './types/report';

describe('ReportsComponent', () => {
    let component: ReportsComponent;
    let fixture: ComponentFixture<ReportsComponent>;

    const mockReports: ReportTypeString[] = [
        { title: 'Report 1', created: '2023-01-01', modified: '2023-01-02', owner: 'User A', form: 'Form A', link: 'http://link1' },
        { title: 'Report 2', created: '2023-01-03', modified: '2023-01-04', owner: 'User B', form: 'Form B', link: 'http://link2' },
        { title: 'Report 3', created: '2023-01-05', modified: '2023-01-06', owner: 'User C', form: 'Form C', link: 'http://link3' },
        { title: 'Report 4', created: '2023-01-07', modified: '2023-01-08', owner: 'User D', form: 'Form D', link: 'http://link4' },
        { title: 'Report 5', created: '2023-01-09', modified: '2023-01-10', owner: 'User E', form: 'Form E', link: 'http://link5' },
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReportsComponent,
                RouterTestingModule,
                LucideAngularModule.pick({ Search, Plus, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ChartPieIcon, PencilIcon, TrashIcon })
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ReportsComponent);
        component = fixture.componentInstance;

        // Spy on the API methods directly on the instance since it's a property
        spyOn(component.reportsApi, 'getAllReports').and.returnValue(Promise.resolve(mockReports));
        spyOn(component.reportsApi, 'delete').and.returnValue(Promise.resolve());

        fixture.detectChanges(); // This triggers ngOnInit
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load reports on init', fakeAsync(() => {
        // fixture.detectChanges() already called ngOnInit, but promises resolve asynchronously
        tick();
        expect(component.reportsApi.getAllReports).toHaveBeenCalled();
        expect(component.listReports().length).toBe(5);
    }));

    describe('Filtering', () => {
        it('should filter reports', fakeAsync(() => {
            const filterTerm = 'Report 1';
            const filteredMock = [mockReports[0]];

            (component.reportsApi.getAllReports as jasmine.Spy).and.returnValue(Promise.resolve(filteredMock));

            const inputEvent = { target: { value: filterTerm } } as unknown as Event;
            component.updateSearch(inputEvent);
            tick();

            expect(component.currentFilter()).toBe(filterTerm);
            expect(component.currentPage()).toBe(1); // Should reset to page 1
            expect(component.reportsApi.getAllReports).toHaveBeenCalledWith(filterTerm, 'Newest'); // default sort is Newest
            expect(component.listReports().length).toBe(1);
        }));
    });

    describe('Sorting', () => {
        it('should toggle sort order', () => {
            expect(component.isNewest).toBeTrue();
            component.toggleSort();
            expect(component.isNewest).toBeFalse();
        });

        it('should apply sort from dropdown', fakeAsync(() => {
            component.applySort('Oldest');
            tick();

            expect(component.reportsApi.getAllReports).toHaveBeenCalledWith('', 'Oldest');
            expect(component.listReports()).toEqual(mockReports); // Assuming mock data returns same for test unless mocked differently
        }));
    });

    describe('Pagination', () => {
        it('should calculate total pages correctly', fakeAsync(() => {
            tick(); // wait for init load
            component.pageSize.set(2);
            // 5 items / 2 per page = 3 pages
            expect(component.totalPages()).toBe(3);
        }));

        it('should navigate to next/prev page', fakeAsync(() => {
            tick();
            component.pageSize.set(2);
            expect(component.currentPage()).toBe(1);

            component.nextPage();
            expect(component.currentPage()).toBe(2);

            component.prevPage();
            expect(component.currentPage()).toBe(1);
        }));

        it('should not navigate out of bounds', fakeAsync(() => {
            tick();
            component.pageSize.set(2); // 3 pages
            component.goToPage(1);

            component.prevPage();
            expect(component.currentPage()).toBe(1); // Can't go below 1

            component.goToPage(3);
            component.nextPage();
            expect(component.currentPage()).toBe(3); // Can't go above totalPages
        }));

        it('should paginate data correctly', fakeAsync(() => {
            tick();
            component.pageSize.set(2);
            component.currentPage.set(1);
            expect(component.paginatedReports().length).toBe(2);
            expect(component.paginatedReports()[0].title).toBe('Report 1');

            component.currentPage.set(3);
            expect(component.paginatedReports().length).toBe(1); // 5th item
            expect(component.paginatedReports()[0].title).toBe('Report 5');
        }));
    });

    describe('Deletion', () => {
        it('should open delete modal', () => {
            const report = mockReports[0];
            component.openDeleteModal(report);

            expect(component.reportToDelete()).toBe(report);
            expect(component.showDeleteModal()).toBeTrue();
        });

        it('should call delete api on confirmation', fakeAsync(() => {
            const report = mockReports[0];
            component.openDeleteModal(report);

            component.handleDelete();
            tick();

            expect(component.reportsApi.delete).toHaveBeenCalledWith(report.title);
            expect(component.reportsApi.getAllReports).toHaveBeenCalled(); // Should refresh list
            expect(component.showDeleteModal()).toBeFalse();
        }));

        it('should close modal', () => {
            component.showDeleteModal.set(true);
            component.closeModal();
            expect(component.showDeleteModal()).toBeFalse();
        });
    });
});
