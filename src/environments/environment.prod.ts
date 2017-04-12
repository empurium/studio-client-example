import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: true,
    staging: false,

    // API URL's
    api: {
        passport:     'http://passport.publication.studio',
        cashier:      'http://cashier.360global.space',
        vinyl:        'http://vinyl.360global.space',
        files:        'http://files.360global.space',
        publications: 'http://publication.360global.space',
    },

    passport: {
        login:       'http://passport.publication.studio/authorize',
        clientId:    '8',
        redirectURI: 'http://www.360global.space',
        scope:       '',
    },
};
