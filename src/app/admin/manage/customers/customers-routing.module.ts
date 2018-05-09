import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersFormComponent} from './customers-form/customers-form.component';
import {CustomersInfoComponent} from './customers-info/customers-info.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Khách hàng'},
        children: [
            {path: 'list', component: CustomersListComponent, data: {title: 'Danh sách khách hàng'}},
            {path: 'info/:id', component: CustomersInfoComponent, data: {title: 'Thông tin khách hàng'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
