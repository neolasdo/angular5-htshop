import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FrontendLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    title: 'Home'
                },
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
