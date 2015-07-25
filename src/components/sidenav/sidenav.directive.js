(function () {
    'use strict';

    angular
        .module('app.sidenav')
        .directive('tmplSidenav', directiveFunction)
        .controller('SidenavController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/sidenav/sidenav.html',
            scope: {
            },
            controller: 'SidenavController',
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
