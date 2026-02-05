import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, House, List, User, Activity, LayoutDashboard, GitMerge, Bell, LogOut, History } from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink, CommonModule, LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  readonly title = 'ZenduForms';
  readonly HomeIcon = House;
  readonly ListIcon = List;
  readonly UserIcon = User;
  readonly ActivityIcon = Activity;
  readonly DashboardIcon = LayoutDashboard;
  readonly GitMergeIcon = GitMerge;
  readonly BellIcon = Bell;
  readonly LogOutIcon = LogOut;
  readonly HistoryIcon = History;
}
