import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging: true,

    // API URL's
    api: {
        passport:     'http://staging-passport.publication.studio',
        cashier:      'http://staging-cashier.freescan.com',
        vinyl:        'http://staging-vinyl.freescan.com',
        files:        'http://staging-files.freescan.com',
        publications: 'http://staging-publication-api.publication.studio',
    },

    passport: {
        login:       'http://staging-passport.publication.studio/authorize',
        clientId:    '8',
        redirectURI: 'http://360global.smashitall.com',
        scope:       '',
    },
};
