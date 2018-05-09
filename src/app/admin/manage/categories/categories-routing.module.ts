import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoriesFormComponent} from './categories-form/categories-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: '',
        data: {title: 'Danh mục'},
        children: [
            {path: 'list', component: CategoriesListComponent, data: {title: 'Danh sách danh mục'}},
            {path: 'add', component: CategoriesFormComponent, data: {title: 'Thêm danh mục'}},
            {path: 'edit/:id', component: CategoriesFormComponent, data: {title: 'Sửa danh mục'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
