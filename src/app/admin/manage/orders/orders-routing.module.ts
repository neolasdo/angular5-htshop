import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrderInfoComponent} from './order-info/order-info.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Đơn hàng'},
        children: [
            {path: 'list', component: OrdersListComponent, data: {title: 'Danh sách đơn hàng'}},
            {path: 'info/:id', component: OrderInfoComponent, data: {title: 'Thông tin đơn hàng'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
