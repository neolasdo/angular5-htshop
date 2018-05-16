import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap';
import {DataTableModule} from './data-table/data-table.module';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {TagInputModule} from 'ngx-chips';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule,
        TagInputModule,
    ],
    declarations: [],
    exports: [
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule,
        TagInputModule
    ]
})
export class SharedModule {
}
