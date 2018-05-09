import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
import {HomeComponent} from './home/home.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './post/post.component';
import {CategoryComponent} from './category/category.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FrontendLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {
                    title: 'Home'
                },
            },
            {
                path: 'product/:slug',
                component: SingleProductComponent,
                data: {
                    title: 'Product Detail'
                },
            },
            {
                path: 'blog',
                component: BlogComponent,
                data: {
                    title: 'Blog'
                },
            },
            {
                path: 'post/:slug',
                component: PostComponent,
                data: {
                    title: 'Post'
                },
            },
            {
                path: 'category/:name',
                component: CategoryComponent,
                data: {
                    title: 'Category'
                },
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
