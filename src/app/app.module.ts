import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FREESCAN_ENV, StudioModule, DashboardModule, ArticlesModule } from '@rndstudio/skeleton';
import { BillingModule } from '@rndstudio/billing';

// Core
import { environment } from '@env/environment';
import { AppRoutingModule } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';


@NgModule({
    imports: [
        BrowserModule, // Do not use with Universal
        BrowserAnimationsModule,

        AppRoutingModule,
        StudioModule.forRoot(),
        ArticlesModule.forRoot(),
        BillingModule.forRoot(),
        DashboardModule,
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        PublicationsComponent,
        LinksComponent,
    ],

    providers: [
        { provide: FREESCAN_ENV, useValue: environment },
    ],

    bootstrap: [AppComponent],
})
export class AppModule {
}
