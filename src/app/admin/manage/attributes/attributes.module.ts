import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributesListComponent } from './attributes-list/attributes-list.component';
import { AttributesFormComponent } from './attributes-form/attributes-form.component';

@NgModule({
  imports: [
    CommonModule,
    AttributesRoutingModule
  ],
  declarations: [AttributesListComponent, AttributesFormComponent]
})
export class AttributesModule { }
