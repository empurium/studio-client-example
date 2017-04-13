import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnavailableComponent, articlesRoutes } from '@freescan/skeleton';

import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
    {
        path:      '',
        component: HomeComponent,
    },
    {
        path:      'links',
        component: LinksComponent,
    },
    {
        path:         'settings',
        loadChildren: './settings/settings.module#SettingsModule',
    },

    ...articlesRoutes,

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
