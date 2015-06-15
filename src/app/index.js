/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />
var flop;
(function (flop) {
    'use strict';
    angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
        .controller('MainCtrl', flop.MainCtrl)
        .controller('NavbarCtrl', flop.NavbarCtrl)
        .controller('FlopCtrl', flop.FlopCtrl)
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
            .when('/flop', {
            templateUrl: 'app/flop/flop.html',
            controller: 'FlopCtrl'
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(flop || (flop = {}));
