import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule, Search, Plus, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, ChartPieIcon, PencilIcon, TrashIcon } from "lucide-angular";

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

  isNewest: boolean = true;

  listReports: { title: string, created: string, modified: string, owner: string, form: string, active?: boolean }[] = [
    {
      title: "Test report",
      created: "2022-01-01",
      modified: "2022-01-01",
      owner: "John Doe",
      form: "Test form",
      active: true
    },
    {
      title: "Test report",
      created: "2026-01-01",
      modified: "2026-02-01",
      owner: "Andres Castaneda",
      form: "Test A"
    }
  ]

  toggleSort() {
    this.isNewest = !this.isNewest;
  }

  selectReport(selectedReport: { title: string, created: string, modified: string, owner: string, form: string, active?: boolean }) {
    this.listReports.forEach(report => report.active = false);

    selectedReport.active = true;
  }
}
