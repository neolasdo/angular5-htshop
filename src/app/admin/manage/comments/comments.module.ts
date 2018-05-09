import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {CommentsInfoComponent} from './comments-info/comments-info.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CommentsRoutingModule,
        SharedModule
    ],
    declarations: [CommentsListComponent, CommentsInfoComponent]
})
export class CommentsModule {
}
