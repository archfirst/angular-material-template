(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'app.accounts',
        'app.appbar',
        'app.approot',
        'app.dashboard',
        'app.login',
        'app.sidenav'
    ]);
})();
