import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrderInfoComponent} from './order-info/order-info.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        OrdersRoutingModule,
        SharedModule
    ],
    declarations: [OrdersListComponent, OrderInfoComponent]
})
export class OrdersModule {
}
