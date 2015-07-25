(function () {

    'use strict';

    angular.module('app.accounts')
        .directive('tmplAccounts', directiveFunction)
        .controller('AccountsController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/accounts/accounts.html',
            scope: {
            },
            controller: 'AccountsController',
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
            logger.log('Activated Accounts View');
        }
    }

})();
