/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="flop/flop.controller.ts"/>
var flop;
(function (flop) {
    'use strict';
    angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
        .controller('FlopCtrl', flop.FlopCtrl)
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'app/flop/flop.html',
            controller: 'FlopCtrl'
        })
            .otherwise({
            redirectTo: '/'
        });
    });
})(flop || (flop = {}));
