import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioModule } from '@freescan/skeleton';
import { BillingModule } from '@freescan/billing';

import { environment } from '@env/environment';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';


@NgModule({
    imports: [
        CommonModule,

        SettingsRoutingModule,
        StudioModule,
        BillingModule.forRoot(environment),
    ],

    declarations: [
        SettingsComponent,
        AccountComponent,
    ],
})
export class SettingsModule {
}
