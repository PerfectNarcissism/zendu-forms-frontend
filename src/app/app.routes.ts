import { Routes } from '@angular/router';
import { ReportsComponent } from './pages/reports/reports.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
