import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersInfoComponent} from './customers-info/customers-info.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        SharedModule
    ],
    declarations: [CustomersListComponent, CustomersInfoComponent]
})
export class CustomersModule {
}
