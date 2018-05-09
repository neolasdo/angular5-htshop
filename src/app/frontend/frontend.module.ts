import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontendRoutingModule} from './frontend-routing.module';
import {HomeComponent} from './home/home.component';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
// app components
import {AppHeaderComponent, AppFooterComponent, AppNavbarComponent} from '../components/frontend/';
import {BsDropdownModule, CollapseModule, TabsModule} from 'ngx-bootstrap';
import { BannerComponent } from './home/banner/banner.component';
import { ProcessComponent } from './home/process/process.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { WidgetComponent } from './home/widget/widget.component';
import { ProductBlockComponent } from './home/widget/product-block/product-block.component';
import { BlogBlockComponent } from './home/widget/blog-block/blog-block.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SingleProductTabsComponent } from './single-product/single-product-tabs/single-product-tabs.component';
import {SingleProductInformationComponent} from './single-product/single-product-information/single-product-information.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';

const APP_COMPONENTS = [
    AppHeaderComponent,
    AppFooterComponent,
    AppNavbarComponent
]

@NgModule({
    imports: [
        CommonModule,
        FrontendRoutingModule,
        SlideshowModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        TabsModule.forRoot()
    ],
    declarations: [
        ...APP_COMPONENTS,
        HomeComponent,
        FrontendLayoutComponent,
        BannerComponent,
        ProcessComponent,
        WidgetComponent,
        ProductBlockComponent,
        BlogBlockComponent,
        SingleProductComponent,
        SingleProductTabsComponent,
        SingleProductInformationComponent,
        BlogComponent,
        PostComponent,
        CategoryComponent
    ]
})
export class FrontendModule {
}
