import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnavailableComponent } from '@freescan/skeleton';

import { HomeComponent } from './home/home.component';

// TODO Lazy load these...
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PressComponent } from './press/press.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:      '',
        component: HomeComponent,
    },
    {
        path:      'philosophy',
        component: PhilosophyComponent,
    },
    {
        path:      'press',
        component: PressComponent,
    },
    {
        path:      'testimonials',
        component: TestimonialsComponent,
    },
    {
        path:      'resources',
        component: ResourcesComponent,
    },
    {
        path:      'reports/:id',
        component: ResourcesComponent,
    },
    {
        path:      'contact',
        component: ContactComponent,
    },
    {
        path:         'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path:         'settings',
        loadChildren: './settings/settings.module#SettingsModule',
    },

    // 404
    {
        path:      '**',
        component: UnavailableComponent,
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
