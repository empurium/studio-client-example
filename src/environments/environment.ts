// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging: false,

    studioUrl: '//studio.360global.local:5001',

    // API URL's
    api: {
        passport:     'http://passport.publication.studio.local',
        vinyl:        'http://vinyl.360global.local',
        cashier:      'http://cashier.360global.local',
        files:        'http://files.360global.local',
        publications: 'http://publication.360global.local',
    },

    passport: {
        login:       'http://passport.publication.studio.local/authorize',
        clientId:    '10',
        redirectURI: 'http://360global.local:5003',
        scope:       '',
    },
};
