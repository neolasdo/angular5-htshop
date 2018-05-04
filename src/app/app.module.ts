import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
