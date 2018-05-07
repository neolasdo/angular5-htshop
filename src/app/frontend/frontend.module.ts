import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontendRoutingModule} from './frontend-routing.module';
import {HomeComponent} from './home/home.component';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
// app components
import {AppHeaderComponent, AppFooterComponent, AppNavbarComponent} from '../components/frontend/';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';

const APP_COMPONENTS = [
    AppHeaderComponent,
    AppFooterComponent,
    AppNavbarComponent
]

@NgModule({
    imports: [
        CommonModule,
        FrontendRoutingModule,
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    declarations: [
        ...APP_COMPONENTS,
        HomeComponent,
        FrontendLayoutComponent
    ]
})
export class FrontendModule {
}
