import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: true,
    staging:    false,

    studioUrl: '//studio.360global.space',

    // API URL's
    api: {
        passport:     'https://passport.360global.space',
        cashier:      'https://cashier.360global.space',
        vinyl:        'https://vinyl.360global.space',
        files:        'https://files.360global.space',
        publications: 'https://publication.360global.space',
    },

    passport: {
        login:       'https://passport.publication.studio/authorize',
        clientId:    '10',
        redirectURI: 'https://www.360global.space',
        scope:       '',
    },
};
