import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppInterceptorService , AuthGuard, AuthService, JwtService, ApiService, HttpClientService} from './shared';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true},
        AuthGuard,
        AuthService,
        JwtService,
        ApiService,
        HttpClientService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
