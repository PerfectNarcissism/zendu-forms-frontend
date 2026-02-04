import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule, Search, Plus, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ChartPieIcon, PencilIcon, TrashIcon } from "lucide-angular";
import { ReportsApi } from './services/reports.api';
import { ReportType } from './types/report';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  readonly SearchIcon = Search;
  readonly PlusIcon = Plus;
  readonly ChevronDownIcon = ChevronDown;
  readonly ChevronUpIcon = ChevronUp;
  readonly ChevronRightIcon = ChevronRight;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChartPieIcon = ChartPieIcon;
  readonly PencilIcon = PencilIcon;
  readonly TrashIcon = TrashIcon;

  protected readonly Math = Math;

  isNewest: boolean = true;

  // APIs
  readonly reportsApi = new ReportsApi();

  // Signals reactivity
  listReports: WritableSignal<ReportType[]> = signal([])
  showSortDropdown = signal(false);
  currentSort = signal('Newest');
  currentFilter = signal('');
  currentPage = signal(1);
  pageSize = signal(4);

  // Functions
  toggleSort = () => {
    this.isNewest = !this.isNewest;
  }

  updateSearch = async (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.currentFilter.set(value);

    this.currentPage.set(1);

    const results = await this.reportsApi.getAllReports(value, this.currentSort() as 'Newest' | 'Oldest');
    this.listReports.set(results);
  }

  toggleSortDropdown = () => {
    this.showSortDropdown.set(!this.showSortDropdown());
  }

  applySort = async (type: 'Newest' | 'Oldest') => {
    this.currentSort.set(type);
    this.showSortDropdown.set(false);

    this.currentPage.set(1);

    const results = await this.reportsApi.getAllReports(this.currentFilter(), type);
    this.listReports.set(results);
  }

  goToPage = (page: number) => {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  nextPage = () => {
    this.goToPage(this.currentPage() + 1);
  }

  prevPage = () => {
    this.goToPage(this.currentPage() - 1);
  }

  paginatedReports = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    return this.listReports().slice(startIndex, endIndex);
  });

  // Lifecycle
  async ngOnInit(): Promise<void> {
    this.listReports.set(await this.reportsApi.getAllReports(this.currentFilter(), this.currentSort() as 'Newest' | 'Oldest'));
  }


  totalRecords = computed(() => this.listReports().length);
  totalPages = computed(() => Math.ceil(this.totalRecords() / this.pageSize()));
}
