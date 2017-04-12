import { Component, OnInit } from '@angular/core';
import { DashboardComponent, Navigation } from '@freescan/skeleton';


@Component({
    selector: 'studio-360-app',
    template: `<studio-dashboard [navigation]="nav"></studio-dashboard>`,
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
            label: 'Authenticate',
            icon:  'icon-login',
            show:  (): boolean => {
                return !this.authenticated();
            },
            click: (): void => {
                this.login();
            },
        },
        {
            label: 'Publication Studio',
            icon:  'icon-book-open',
            href:  '//studio.360global.local:5001', // TODO - environment-based URL
            show:  (): boolean => {
                return this.roles.has('dashboard');
            },
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
            (roles: string[]) => { },
            (error: string) => console.error(error),
        );
    }
}
