/* jshint -W117 */
describe('Home', function() {
    'use strict';

    var controller;

    beforeEach(function() {
        bard.appModule('app.home');
        bard.inject('$rootScope', '$controller');
    });

    beforeEach(function() {
        controller = $controller('HomeController');
        $rootScope.$apply();
    });

    describe('Home controller', function() {
        it('dummy test', function() {
        });
    });
});
