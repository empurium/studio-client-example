import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging: true,

    // API URL's
    api: {
        passport:     'http://staging-passport.publication.studio',
        cashier:      'http://staging-cashier-api.360global.space',
        vinyl:        'http://staging-vinyl-api.360global.space',
        files:        'http://staging-files-api.360global.space',
        publications: 'http://staging-publication-api.360global.space',
    },

    passport: {
        login:       'http://staging-passport.publication.studio/authorize',
        clientId:    '8',
        redirectURI: 'http://staging.360global.space',
        scope:       '',
    },
};
