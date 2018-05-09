import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {CommentsInfoComponent} from './comments-info/comments-info.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Bình luận'},
        children: [
            {path: 'list', component: CommentsListComponent, data: {title: 'Danh sách bình luận'}},
            {path: 'info/:id', component: CommentsInfoComponent, data: {title: 'Chi tiết bình luận'}},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
