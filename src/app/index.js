/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="flop/flop.controller.ts"/>
var flop;
(function (flop) {
    'use strict';
    angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
        'ngResource', 'ngRoute', 'ngMaterial', 'oauth'])
        .controller('FlopCtrl', flop.FlopCtrl)
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'app/flop/flop.html',
            controller: 'FlopCtrl'
        })
            .when('/access_token=:accessToken', {
            templateUrl: 'app/flop/welcome.html',
            controller: function ($location, AccessToken) {
                var hash = $location.path().substr(1);
                AccessToken.setTokenFromString(hash);
                $location.path('/');
                $location.replace();
                console.log("whats location?" + $location);
            }
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(flop || (flop = {}));
