import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnavailableComponent, ArticlesComponent, ArticleComponent } from '@freescan/skeleton';

import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
    {
        path:      '',
        pathMatch: 'full',
        component: HomeComponent,
    },

    {
        path:      'publications',
        component: PublicationsComponent,
        children:  [
            {
                path:      '',
                component: ArticlesComponent,
            },
            {
                path:      ':slug',
                component: ArticleComponent,
            },
        ],
    },

    {
        path:      'links',
        component: LinksComponent,
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
