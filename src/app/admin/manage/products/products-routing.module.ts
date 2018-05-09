import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsFormComponent} from './products-form/products-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Sản phẩm'},
        children: [
            {path: 'list', component: ProductsListComponent, data: {title: 'Danh sách sản phẩm'}},
            {path: 'add', component: ProductsFormComponent, data: {title: 'Thêm sản phẩm'}},
            {path: 'edit/:id', component: ProductsFormComponent, data: {title: 'Sửa sản phẩm'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
