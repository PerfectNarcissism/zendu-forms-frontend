import { Component, output, signal } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { ChevronDown, ChevronUp } from "lucide-angular";

@Component({
  selector: 'app-sort-dropdown',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './sort-dropdown.component.html',
  styleUrl: './sort-dropdown.component.css'
})
export class SortDropdownComponent {
  readonly ChevronDownIcon = ChevronDown;
  readonly ChevronUpIcon = ChevronUp;

  showSortDropdown = signal(false);
  currentSort = signal('Newest');

  sorted = output<{ type: 'Newest' | 'Oldest' }>();

  toggleSortDropdown = () => {
    this.showSortDropdown.set(!this.showSortDropdown());
  }

  applySort = async (type: 'Newest' | 'Oldest') => {
    this.currentSort.set(type);
    this.showSortDropdown.set(false);

    this.sorted.emit({ type });
  }

}
