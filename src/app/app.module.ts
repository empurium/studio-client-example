import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FreeScanModule, DashboardModule } from '@freescan/skeleton';

// Core
import { environment } from '@env/environment';
import { AppRoutingModule } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// TODO Lazy load these as needed...
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PressComponent } from './press/press.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    imports: [
        BrowserModule, // Do not use with Universal
        BrowserAnimationsModule,

        AppRoutingModule,
        FreeScanModule.forRoot(environment),
        DashboardModule,
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        PhilosophyComponent,
        PressComponent,
        TestimonialsComponent,
        ResourcesComponent,
        ContactComponent,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {
}
