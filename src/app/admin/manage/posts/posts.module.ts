import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostsFormComponent} from './posts-form/posts-form.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        PostsRoutingModule,
        SharedModule
    ],
    declarations: [PostsListComponent, PostsFormComponent]
})
export class PostsModule {
}
