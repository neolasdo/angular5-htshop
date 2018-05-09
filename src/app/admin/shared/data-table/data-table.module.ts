import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from './data-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FilterTableComponent} from './filter-table.component';
import {TablePagerComponent} from './table-pager.component';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgxDatatableModule,
        BsDropdownModule,
        FormsModule
    ],
    declarations: [DataTableComponent, FilterTableComponent, TablePagerComponent],
    exports: [DataTableComponent, FilterTableComponent, TablePagerComponent]
})
export class DataTableModule {
}
