import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FREESCAN_ENV, StudioModule, DashboardModule, ArticlesModule } from '@freescan/skeleton';

// Core
import { environment } from '@env/environment';
import { AppRoutingModule } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';


@NgModule({
    imports: [
        BrowserModule, // Do not use with Universal
        BrowserAnimationsModule,

        AppRoutingModule,
        StudioModule.forRoot(),
        ArticlesModule.forRoot(),
        DashboardModule,
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        LinksComponent,
    ],

    providers: [
        { provide: FREESCAN_ENV, useValue: environment },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {
}
