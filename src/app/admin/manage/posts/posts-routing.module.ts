import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsListComponent} from './posts-list/posts-list.component';
import {PostsFormComponent} from './posts-form/posts-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Bài viết'},
        children: [
            {path: 'list', component: PostsListComponent, data: {title: 'Danh sách bài viết'}},
            {path: 'add', component: PostsFormComponent, data: {title: 'Thêm bài viết'}},
            {path: 'edit/:id', component: PostsFormComponent, data: {title: 'Sửa bài viết'}}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
