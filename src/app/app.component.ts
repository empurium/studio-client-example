import { Component, OnInit } from '@angular/core';
import { DashboardComponent, Navigation } from '@freescan/skeleton';

import { environment } from '@env/environment';


@Component({
    selector: 'studio-360-app',
    template: `<studio-dashboard [navigation]="nav"></studio-dashboard>
    <studio-billing-modal></studio-billing-modal>
    `,
})
export class AppComponent extends DashboardComponent implements OnInit {
    public nav: Navigation[] = [
        {
            routerLink:  '/',
            label:       'Home',
            icon:        'icon-home',
            exactActive: true,
        },
        {
            label: 'Publication Studio',
            icon:  'icon-book-open',
            href:  environment.studioUrl,
            show:  (): boolean => {
                return this.roles.has('dashboard');
            },
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
