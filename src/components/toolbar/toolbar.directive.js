(function () {
    'use strict';

    angular
        .module('app.toolbar')
        .directive('tmplToolbar', directiveFunction)
        .controller('ToolbarController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/toolbar/toolbar.html',
            scope: {
            },
            controller: 'ToolbarController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$mdDialog'];

    /* @ngInject */
    function ControllerFunction($mdDialog) {
        var vm = this;
        vm.login = login;

        function login() {
            $mdDialog.show({
                templateUrl: 'components/login/login-dialog.html',
                controller: 'LoginDialogController',
                controllerAs: 'vm'
            });
        }
    }

})();
