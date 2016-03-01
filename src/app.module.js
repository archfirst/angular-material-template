(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'app.quickstart',
        'app.approot',
        'app.home',
        'app.login',
        'app.toolbar'
    ]);
})();
