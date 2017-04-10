import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { billingRoutes } from '@freescan/billing';

import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    {
        path:      '',
        component: SettingsComponent,
        children:  [
            {
                path:      '',
                component: AccountComponent,
            },
            ...billingRoutes,
        ],
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {
}
