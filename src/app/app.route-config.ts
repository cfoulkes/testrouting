import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ClientComponent } from './client/client.component'
import { AdminComponent } from './admin/admin.component'


export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lazy',
        loadChildren: 'app/lazy/lazy.module#LazyModule'
    },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];