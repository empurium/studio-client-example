import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: true,
    staging: false,

    // API URL's
    api: {
        passport:     'http://passport.publication.studio',
        cashier:      'http://cashier.freescan.com',
        vinyl:        'http://vinyl.freescan.com',
        files:        'http://files.freescan.com',
        publications: 'http://api.publication.studio',
    },

    passport: {
        login:       'http://passport.360global.publication.studio/authorize',
        clientId:    '6',
        redirectURI: 'http://www.360global.net', // Pull from domain
        scope:       '',
    },
};
