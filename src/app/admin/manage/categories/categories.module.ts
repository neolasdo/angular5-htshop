import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoriesFormComponent} from './categories-form/categories-form.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        SharedModule
    ],
    declarations: [CategoriesListComponent, CategoriesFormComponent]
})
export class CategoriesModule {
}
