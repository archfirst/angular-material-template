(function () {
    'use strict';

    angular
        .module('app.appbar')
        .directive('tmplAppbar', directiveFunction)
        .controller('AppbarController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/appbar/appbar.html',
            scope: {
            },
            controller: 'AppbarController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$mdDialog', '$mdSidenav'];

    /* @ngInject */
    function ControllerFunction($mdDialog, $mdSidenav) {
        var vm = this;
        vm.login = login;
        vm.toggleSidenav = toggleSidenav;

        function toggleSidenav() {
            $mdSidenav('left').toggle();
        }

        function login() {
            $mdDialog.show({
                templateUrl: 'components/login/login-dialog.html',
                controller: 'LoginDialogController',
                controllerAs: 'vm'
            });
        }
    }

})();
