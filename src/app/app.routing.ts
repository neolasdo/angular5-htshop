import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: './frontend/frontend.module#FrontendModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
