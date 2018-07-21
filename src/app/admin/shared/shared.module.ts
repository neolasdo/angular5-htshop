import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import {DataTableModule} from './data-table/data-table.module';
import {QuillEditorModule} from 'ngx-quill-editor/index';
import {TagInputModule} from 'ngx-chips';
import {MediaModule} from '../manage/media/media.module';
import { LoadingModule } from 'ngx-loading';


@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule,
        TagInputModule,
        MediaModule,
        LoadingModule,
        ModalModule.forRoot()
    ],
    declarations: [],
    exports: [
        DataTableModule,
        BsDropdownModule,
        FormsModule,
        QuillEditorModule,
        TagInputModule,
        LoadingModule,
        MediaModule,
    ]
})
export class SharedModule {
}
