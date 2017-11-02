import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioModule } from '@rndstudio/skeleton';
import { BillingModule } from '@rndstudio/billing';

import { SettingsRoutingModule } from './settings.routing';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';


@NgModule({
    imports: [
        CommonModule,

        SettingsRoutingModule,
        StudioModule,
        BillingModule.forRoot(),
    ],

    declarations: [
        SettingsComponent,
        AccountComponent,
    ],
})
export class SettingsModule {
}
