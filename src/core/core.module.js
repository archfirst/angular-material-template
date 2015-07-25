(function() {
    'use strict';

    angular.module('app.core', [
        'ngAnimate', 'ngMaterial', 'ngSanitize',

        // Our reusable framework
        'fw.exception', 'fw.logger',

        // 3rd Party modules
        'ui.router'
    ]);
})();
