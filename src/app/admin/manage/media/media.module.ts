import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { MediaModalComponent } from './media-modal.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MediaRoutingModule,
  ],
  declarations: [MediaComponent, MediaModalComponent],
  exports: [MediaComponent, MediaModalComponent]
})
export class MediaModule { }
