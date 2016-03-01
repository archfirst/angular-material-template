(function () {

    'use strict';

    angular.module('app.quickstart')
        .directive('tmplQuickstart', directiveFunction)
        .controller('QuickstartController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/quickstart/quickstart.html',
            scope: {
            },
            controller: 'QuickstartController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['logger'];

    /* @ngInject */
    function ControllerFunction(logger) {

        activate();

        function activate() {
            logger.log('Activated Quick Start View');
        }
    }

})();
