// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging: false,

    // API URL's
    api: {
        passport:     'http://passport.freescan.local',
        vinyl:        'http://vinyl-api.360global.local',
        cashier:      'http://cashier-api.360global.local',
        files:        'http://files-api.360global.local',
        publications: 'http://publication-api.360global.local',
    },

    passport: {
        login:       'http://passport.freescan.local/authorize',
        clientId:    '8',
        redirectURI: 'http://360global.local:5003',
        scope:       '',
    },
};
