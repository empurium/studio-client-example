import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging:    true,

    studioUrl:  '//staging-studio.360global.space',

    // API URL's
    api: {
        passport:     'https://staging-passport.360global.space',
        cashier:      'https://staging-cashier.360global.space',
        vinyl:        'https://staging-vinyl.360global.space',
        files:        'https://staging-files.360global.space',
        publications: 'https://staging-publication.360global.space',
    },

    passport: {
        login:       'https://staging-passport.publication.studio/authorize',
        clientId:    '10',
        redirectURI: 'http://staging.360global.space',
        scope:       '',
    },
};
