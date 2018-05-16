import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import {DataTableModule} from './data-table/data-table.module';
import {QuillEditorModule} from 'ngx-quill-editor/index';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule
    ],
    declarations: [],
    exports: [
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule
    ]
})
export class SharedModule {
}
