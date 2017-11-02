// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { Environment } from '@rndstudio/skeleton';

export const environment: Environment = {
    production: false,
    staging: false,

    studioUrl: '//studio.360global.test:5001',

    // API URL's
    api: {
        passport:     'http://passport.360global.test',
        vinyl:        'http://vinyl.360global.test',
        cashier:      'http://cashier.360global.test',
        files:        'http://files.360global.test',
        publications: 'http://publication.360global.test',
    },

    passport: {
        login:       'http://passport.publication.studio.test/authorize',
        clientId:    '10',
        redirectURI: 'http://360global.test:5003',
        scope:       '',
    },
};
