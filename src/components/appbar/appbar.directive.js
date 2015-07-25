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
    ControllerFunction.$inject = ['$mdSidenav'];

    /* @ngInject */
    function ControllerFunction($mdSidenav) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;

        function toggleSidenav() {
            $mdSidenav('left').toggle();
        }
    }

})();
