import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RequestPasswordComponent} from './request-password/request-password.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'User'
        },
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'forgot-password',
                component: RequestPasswordComponent,
                data: {
                    title: 'Forgot Password'
                }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
