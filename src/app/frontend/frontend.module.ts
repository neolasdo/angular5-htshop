import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import {FrontendLayoutComponent} from '../layouts/frontend-layout';
// app components
import { AppHeaderComponent} from '../components/frontend/';
const APP_COMPONENTS = [
    AppHeaderComponent
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
