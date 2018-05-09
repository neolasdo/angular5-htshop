import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleLayoutComponent} from '../layouts/simple-layout';
import {FullLayoutComponent} from '../layouts/full-layout';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
            }
        ]
    },
    {
        path: '',
        component: FullLayoutComponent,
        children: [
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', },
            {path: 'posts', loadChildren: './manage/posts/posts.module#PostsModule', },
            {path: 'comments', loadChildren: './manage/comments/comments.module#CommentsModule', },
            {path: 'media', loadChildren: './manage/media/media.module#MediaModule', },
            {path: 'orders', loadChildren: './manage/orders/orders.module#OrdersModule', },
            {path: 'categories', loadChildren: './manage/categories/categories.module#CategoriesModule', },
            {path: 'products', loadChildren: './manage/products/products.module#ProductsModule', },
            {path: 'customers', loadChildren: './manage/customers/customers.module#CustomersModule', },
            {path: 'users', loadChildren: './manage/users/users.module#UsersModule', },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
