(function() {
    'use strict';

    angular
        .module('fw.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', '$mdToast'];

    /* @ngInject */
    function logger($log, $mdToast) {
        var service = {
            log     : log,
            info    : info,
            success : success,
            warn    : warn,
            error   : error,
            debug   : debug
        };

        return service;
        /////////////////////

        function log(message) {
            $log.log('log: ' + message);
        }

        function info(message) {
            $mdToast.showSimple('Info: ' + message);
            $log.info('info: ' + message);
        }

        function success(message) {
            $mdToast.showSimple('Success: ' + message);
            $log.info('success: ' + message);
        }

        function warn(message) {
            $mdToast.showSimple('Warning: ' + message);
            $log.warn('warn: ' + message);
        }

        function error(message) {
            $mdToast.showSimple('Error: ' + message);
            $log.error('error: ' + message);
        }

        function debug(message) {
            $log.debug('debug: ' + message);
        }
    }
}());
