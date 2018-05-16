import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AttributesListComponent} from './attributes-list/attributes-list.component';
import {AttributesFormComponent} from './attributes-form/attributes-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Thuộc tính'},
        children: [
            {path: 'list', component: AttributesListComponent, data: {title: 'Danh sách thuộc tính'}},
            {path: 'add', component: AttributesFormComponent, data: {title: 'Thêm thuộc tính'}},
            {path: 'edit/:id', component: AttributesFormComponent, data: {title: 'Sửa thuộc tính'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributesRoutingModule { }
