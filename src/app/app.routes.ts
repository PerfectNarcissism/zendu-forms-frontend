import { Routes } from '@angular/router';
import { ReportsComponent } from './pages/reports/reports.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/reports/components/add/add.component';

export const routes: Routes = [
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'reports/add',
        component: AddComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
