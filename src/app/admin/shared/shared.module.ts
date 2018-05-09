import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import {DataTableModule} from './data-table/data-table.module';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        FormsModule,
        BsDropdownModule
    ],
    declarations: [],
    exports: [
        DataTableModule,
        FormsModule,
        BsDropdownModule
    ]
})
export class SharedModule {
}
