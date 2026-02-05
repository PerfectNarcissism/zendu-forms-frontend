import { Component, output } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Search } from "lucide-angular";

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  SearchIcon = Search;

  // Outputs
  updated = output<Event>();

  updateSearch(event: Event) {
    this.updated.emit(event);
  }
}
