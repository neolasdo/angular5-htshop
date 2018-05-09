import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersFormComponent} from './users-form/users-form.component';
import {UsersInfoComponent} from './users-info/users-info.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule
    ],
    declarations: [UsersListComponent, UsersFormComponent, UsersInfoComponent]
})
export class UsersModule {
}
