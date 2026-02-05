import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  // Inputs
  isOpen = input<boolean>(false);
  title = input<string>('Confirm Action');
  message = input<string>('Are you sure you want to proceed?');

  // Outputs
  confirmed = output<void>();
  closed = output<void>();

  onConfirm() { this.confirmed.emit(); }
  onCancel() { this.closed.emit(); }
}
