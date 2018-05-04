import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
// app components
import { AppHeaderComponent} from '../components/frontend/';
import {AppFooterComponent} from '../components/frontend/app-footer';
const APP_COMPONENTS = [
    AppHeaderComponent,
    AppFooterComponent
]
@NgModule({
  imports: [
    CommonModule,
    FrontendRoutingModule
  ],
  declarations: [
      ...APP_COMPONENTS,
      HomeComponent,
      FrontendLayoutComponent
  ]
})
export class FrontendModule { }
