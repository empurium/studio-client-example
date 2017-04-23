import { Environment } from '@freescan/skeleton';

export const environment: Environment = {
    production: false,
    staging:    true,

    studioUrl:  '//staging-studio.360global.space',

    // API URL's
    api: {
        passport:     'http://staging-passport.publication.studio',
        cashier:      'http://staging-cashier.360global.space',
        vinyl:        'http://staging-vinyl.360global.space',
        files:        'http://staging-files.360global.space',
        publications: 'http://staging-publication.360global.space',
    },

    passport: {
        login:       'http://staging-passport.publication.studio/authorize',
        clientId:    '10',
        redirectURI: 'http://staging.360global.space',
        scope:       '',
    },
};
