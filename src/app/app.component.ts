import { Component, OnInit } from '@angular/core';
import { DashboardComponent, Navigation } from '@freescan/skeleton';

import { environment } from '@env/environment';


@Component({
    selector: 'studio-360-app',
    template: `<studio-dashboard [navigation]="nav" [studioUrl]="studio" layout="fluid"></studio-dashboard>
    <studio-billing-modal></studio-billing-modal>
    `,
})
export class AppComponent extends DashboardComponent implements OnInit {
    public studio: string = environment.studioUrl;
    public nav: Navigation[] = [
        {
            routerLink:  '/',
            label:       'Home',
            icon:        'icon-home',
            exactActive: true,
        },
        {
            routerLink: '/publications',
            label:      'Publications',
            icon:       'icon-notebook',
        },
        {
            routerLink: '/links',
            label:      'Links',
            icon:       'icon-link',
        },
    ];

    public ngOnInit(): void {
        this.attemptLogin();

        this.roles.all().subscribe(
            (roles: string[]) => {
                // Fetch roles for navigation
            },
            (error: string) => console.error(error),
        );
    }
}
