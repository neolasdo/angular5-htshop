import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsFormComponent} from './products-form/products-form.component';
import {MediaModalComponent} from '../media/media-modal.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ],
    declarations: [ProductsListComponent, ProductsFormComponent]
})
export class ProductsModule {
}
