import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';

if (environment.production || environment.staging) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
