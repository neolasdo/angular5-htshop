import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleLayoutComponent} from '../layouts/simple-layout';
import {FullLayoutComponent} from '../layouts/full-layout';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
            }
        ]
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Admin'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
