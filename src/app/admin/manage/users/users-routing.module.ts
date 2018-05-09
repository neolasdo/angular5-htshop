import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersFormComponent} from './users-form/users-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Quản trị viên'},
        children: [
            {path: 'list', component: UsersListComponent, data: {title: 'Danh sách quản trị viên'}},
            {path: 'add', component: UsersFormComponent, data: {title: 'Thêm quản trị viên'}},
            {path: 'info/:id', component: UsersFormComponent, data: {title: 'Thông tin quản trị viên'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
