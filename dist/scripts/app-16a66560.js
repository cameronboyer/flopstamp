var flop;
(function (flop) {
    'use strict';
    var FlopCtrl = (function () {
        /* @ngInject */
        function FlopCtrl($scope) {
            $scope.date = new Date();
        }
        FlopCtrl.$inject = ["$scope"];
        return FlopCtrl;
    })();
    flop.FlopCtrl = FlopCtrl;
})(flop || (flop = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb3AvZmxvcC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbImZsb3AiLCJmbG9wLkZsb3BDdHJsIiwiZmxvcC5GbG9wQ3RybC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxJQUFJLENBY1Y7QUFkRCxXQUFPLElBQUksRUFBQyxDQUFDO0lBQ1hBLFlBQVlBLENBQUNBO0lBTWJBLElBQWFBLFFBQVFBO1FBQ25CQyxlQUFlQTtRQUNmQSxTQUZXQSxRQUFRQSxDQUVOQSxNQUFhQTtZQUN4QkMsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBRUhELGVBQUNBO0lBQURBLENBTkFELEFBTUNDLElBQUFEO0lBTllBLGFBQVFBLEdBQVJBLFFBTVpBLENBQUFBO0FBQ0hBLENBQUNBLEVBZE0sSUFBSSxLQUFKLElBQUksUUFjViIsImZpbGUiOiJmbG9wL2Zsb3AuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2FtZXJvbmJveWVyL0RvY3VtZW50cy9naXQvZmxvcHN0YW1wLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBmbG9wIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGludGVyZmFjZSBJRmxvcCBleHRlbmRzIG5nLklTY29wZSB7XG4gICAgZGF0ZTogRGF0ZVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEZsb3BDdHJsIHtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBjb25zdHJ1Y3RvciAoJHNjb3BlOiBJRmxvcCkge1xuICAgICAgJHNjb3BlLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICB9XG59XG4iXX0=
var flop;
(function (flop) {
    'use strict';
    var FlopCtrl = (function () {
        function FlopCtrl($scope) {
            $scope.date = new Date();
        }
        return FlopCtrl;
    })();
    flop.FlopCtrl = FlopCtrl;
})(flop || (flop = {}));

/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="flop/flop.controller.ts"/>
var flop;
(function (flop) {
    'use strict';
    angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial']).controller('FlopCtrl', flop.FlopCtrl).config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/flop/flop.html',
            controller: 'FlopCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})(flop || (flop = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImZsb3AiXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUVwRCxBQUNBLCtDQUQrQztBQUMvQyxJQUFPLElBQUksQ0FrQlY7QUFsQkQsV0FBTyxJQUFJLEVBQUMsQ0FBQztJQUNYQSxZQUFZQSxDQUFDQTtJQUViQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxXQUFXQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxZQUFZQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUMvR0EsVUFBVUEsQ0FBQ0EsVUFBVUEsRUFBRUEsYUFBUUEsQ0FBQ0EsQ0FFbENBLE1BQU1BLENBQUNBLFVBQVVBLGNBQXVDQTtRQUN2RCxjQUFjLENBRVgsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQyxDQUNELFNBQVMsQ0FBQztZQUNULFVBQVUsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQ0EsQ0FDSEE7QUFDREEsQ0FBQ0EsRUFsQk0sSUFBSSxLQUFKLElBQUksUUFrQlYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhbWVyb25ib3llci9Eb2N1bWVudHMvZ2l0L2Zsb3BzdGFtcC8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImZsb3AvZmxvcC5jb250cm9sbGVyLnRzXCIvPlxubW9kdWxlIGZsb3Age1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2Zsb3AnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nUmVzb3VyY2UnLCAnbmdSb3V0ZScsICduZ01hdGVyaWFsJ10pXG4gICAgLmNvbnRyb2xsZXIoJ0Zsb3BDdHJsJywgRmxvcEN0cmwpXG5cbiAgLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXI6IG5nLnJvdXRlLklSb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcblxuICAgICAgLndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Zsb3AvZmxvcC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Zsb3BDdHJsJ1xuICAgICAgfSlcbiAgICAgIC5vdGhlcndpc2Uoe1xuICAgICAgICByZWRpcmVjdFRvOiAnLydcbiAgICAgIH0pO1xuICB9KVxuO1xufVxuIl19
/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="flop/flop.controller.ts"/>
var flop;
(function (flop) {
    'use strict';
    angular.module('flop', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
        .controller('FlopCtrl', flop.FlopCtrl)
        .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'app/flop/flop.html',
            controller: 'FlopCtrl'
        })
            .otherwise({
            redirectTo: '/'
        });
    }]);
})(flop || (flop = {}));

var flop;
(function (flop) {
    'use strict';
    var Thing = (function () {
        function Thing(title, url, description, logo) {
            this.title = title;
            this.url = url;
            this.description = description;
            this.logo = logo;
            this.rank = Math.random();
        }
        return Thing;
    })();
    var MainCtrl = (function () {
        /* @ngInject */
        function MainCtrl($scope) {
            var awesomeThings = [
                {
                    'title': 'AngularJS',
                    'url': 'https://angularjs.org/',
                    'description': 'HTML enhanced for web apps!',
                    'logo': 'angular.png'
                },
                {
                    'title': 'BrowserSync',
                    'url': 'http://browsersync.io/',
                    'description': 'Time-saving synchronised browser testing.',
                    'logo': 'browsersync.png'
                },
                {
                    'title': 'GulpJS',
                    'url': 'http://gulpjs.com/',
                    'description': 'The streaming build system.',
                    'logo': 'gulp.png'
                },
                {
                    'title': 'Jasmine',
                    'url': 'http://jasmine.github.io/',
                    'description': 'Behavior-Driven JavaScript.',
                    'logo': 'jasmine.png'
                },
                {
                    'title': 'Karma',
                    'url': 'http://karma-runner.github.io/',
                    'description': 'Spectacular Test Runner for JavaScript.',
                    'logo': 'karma.png'
                },
                {
                    'title': 'Protractor',
                    'url': 'https://github.com/angular/protractor',
                    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                    'logo': 'protractor.png'
                },
                {
                    'title': 'Angular Material Design',
                    'url': 'https://material.angularjs.org/#/',
                    'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
                    'logo': 'angular-material.png'
                },
                {
                    'title': 'Sass (Ruby)',
                    'url': 'http://sass-lang.com/',
                    'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
                    'logo': 'ruby-sass.png'
                },
                {
                    'title': 'TypeScript',
                    'url': 'http://www.typescriptlang.org/',
                    'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
                    'logo': 'typescript.png'
                }
            ];
            $scope.awesomeThings = new Array();
            awesomeThings.forEach(function (awesomeThing) {
                $scope.awesomeThings.push(awesomeThing);
            });
        }
        MainCtrl.$inject = ["$scope"];
        return MainCtrl;
    })();
    flop.MainCtrl = MainCtrl;
})(flop || (flop = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbImZsb3AiLCJmbG9wLlRoaW5nIiwiZmxvcC5UaGluZy5jb25zdHJ1Y3RvciIsImZsb3AuTWFpbkN0cmwiLCJmbG9wLk1haW5DdHJsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLElBQUksQ0EyRlY7QUEzRkQsV0FBTyxJQUFJLEVBQUMsQ0FBQztJQUNYQSxZQUFZQSxDQUFDQTtJQUViQSxJQUFNQSxLQUFLQTtRQU9UQyxTQVBJQSxLQUFLQSxDQU9HQSxLQUFhQSxFQUFFQSxHQUFXQSxFQUFFQSxXQUFtQkEsRUFBRUEsSUFBWUE7WUFDdkVDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ25CQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUNmQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtZQUMvQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQzVCQSxDQUFDQTtRQUNIRCxZQUFDQTtJQUFEQSxDQWRBRCxBQWNDQyxJQUFBRDtJQU1EQSxJQUFhQSxRQUFRQTtRQUNuQkcsZUFBZUE7UUFDZkEsU0FGV0EsUUFBUUEsQ0FFTkEsTUFBa0JBO1lBQzdCQyxJQUFJQSxhQUFhQSxHQUFHQTtnQkFDcEJBO29CQUNFQSxPQUFPQSxFQUFFQSxXQUFXQTtvQkFDcEJBLEtBQUtBLEVBQUVBLHdCQUF3QkE7b0JBQy9CQSxhQUFhQSxFQUFFQSw2QkFBNkJBO29CQUM1Q0EsTUFBTUEsRUFBRUEsYUFBYUE7aUJBQ3RCQTtnQkFDREE7b0JBQ0VBLE9BQU9BLEVBQUVBLGFBQWFBO29CQUN0QkEsS0FBS0EsRUFBRUEsd0JBQXdCQTtvQkFDL0JBLGFBQWFBLEVBQUVBLDJDQUEyQ0E7b0JBQzFEQSxNQUFNQSxFQUFFQSxpQkFBaUJBO2lCQUMxQkE7Z0JBQ0RBO29CQUNFQSxPQUFPQSxFQUFFQSxRQUFRQTtvQkFDakJBLEtBQUtBLEVBQUVBLG9CQUFvQkE7b0JBQzNCQSxhQUFhQSxFQUFFQSw2QkFBNkJBO29CQUM1Q0EsTUFBTUEsRUFBRUEsVUFBVUE7aUJBQ25CQTtnQkFDREE7b0JBQ0VBLE9BQU9BLEVBQUVBLFNBQVNBO29CQUNsQkEsS0FBS0EsRUFBRUEsMkJBQTJCQTtvQkFDbENBLGFBQWFBLEVBQUVBLDZCQUE2QkE7b0JBQzVDQSxNQUFNQSxFQUFFQSxhQUFhQTtpQkFDdEJBO2dCQUNEQTtvQkFDRUEsT0FBT0EsRUFBRUEsT0FBT0E7b0JBQ2hCQSxLQUFLQSxFQUFFQSxnQ0FBZ0NBO29CQUN2Q0EsYUFBYUEsRUFBRUEseUNBQXlDQTtvQkFDeERBLE1BQU1BLEVBQUVBLFdBQVdBO2lCQUNwQkE7Z0JBQ0RBO29CQUNFQSxPQUFPQSxFQUFFQSxZQUFZQTtvQkFDckJBLEtBQUtBLEVBQUVBLHVDQUF1Q0E7b0JBQzlDQSxhQUFhQSxFQUFFQSxtRkFBbUZBO29CQUNsR0EsTUFBTUEsRUFBRUEsZ0JBQWdCQTtpQkFDekJBO2dCQUNEQTtvQkFDRUEsT0FBT0EsRUFBRUEseUJBQXlCQTtvQkFDbENBLEtBQUtBLEVBQUVBLG1DQUFtQ0E7b0JBQzFDQSxhQUFhQSxFQUFFQSxzRkFBc0ZBO29CQUNyR0EsTUFBTUEsRUFBRUEsc0JBQXNCQTtpQkFDL0JBO2dCQUNEQTtvQkFDRUEsT0FBT0EsRUFBRUEsYUFBYUE7b0JBQ3RCQSxLQUFLQSxFQUFFQSx1QkFBdUJBO29CQUM5QkEsYUFBYUEsRUFBRUEsZ0VBQWdFQTtvQkFDL0VBLE1BQU1BLEVBQUVBLGVBQWVBO2lCQUN4QkE7Z0JBQ0RBO29CQUNFQSxPQUFPQSxFQUFFQSxZQUFZQTtvQkFDckJBLEtBQUtBLEVBQUVBLGdDQUFnQ0E7b0JBQ3ZDQSxhQUFhQSxFQUFFQSwrRUFBK0VBO29CQUM5RkEsTUFBTUEsRUFBRUEsZ0JBQWdCQTtpQkFDekJBO2FBQ0ZBLENBQUNBO1lBRUFBLE1BQU1BLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVNBLENBQUNBO1lBRTFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFTQSxZQUFtQkE7Z0JBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFDSEQsZUFBQ0E7SUFBREEsQ0FsRUFILEFBa0VDRyxJQUFBSDtJQWxFWUEsYUFBUUEsR0FBUkEsUUFrRVpBLENBQUFBO0FBRUhBLENBQUNBLEVBM0ZNLElBQUksS0FBSixJQUFJLFFBMkZWIiwiZmlsZSI6Im1haW4vbWFpbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jYW1lcm9uYm95ZXIvRG9jdW1lbnRzL2dpdC9mbG9wc3RhbXAvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIGZsb3Age1xuICAndXNlIHN0cmljdCc7XG5cbiAgY2xhc3MgVGhpbmcge1xuICAgIHB1YmxpYyByYW5rOiBudW1iZXI7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dvOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgbG9nbzogc3RyaW5nKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMubG9nbyA9IGxvZ287XG4gICAgICB0aGlzLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIGludGVyZmFjZSBJTWFpblNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcbiAgICBhd2Vzb21lVGhpbmdzOiBUaGluZ1tdXG4gIH1cblxuICBleHBvcnQgY2xhc3MgTWFpbkN0cmwge1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGNvbnN0cnVjdG9yICgkc2NvcGU6IElNYWluU2NvcGUpIHtcbiAgICAgIHZhciBhd2Vzb21lVGhpbmdzID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIE1hdGVyaWFsIERlc2lnbicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyanMub3JnLyMvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBBbmd1bGFyIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgR29vZ2xlXFwncyBNYXRlcmlhbCBEZXNpZ24gc3BlY2lmaWNhdGlvbi4nLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLW1hdGVyaWFsLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChSdWJ5KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL3Nhc3MtbGFuZy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ09yaWdpbmFsIFN5bnRhY3RpY2FsbHkgQXdlc29tZSBTdHlsZVNoZWV0cyBpbXBsZW1lbnRlZCBpbiBSdWJ5JyxcbiAgICAgICAgJ2xvZ28nOiAncnVieS1zYXNzLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdUeXBlU2NyaXB0JyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHlwZVNjcmlwdCwgYSB0eXBlZCBzdXBlcnNldCBvZiBKYXZhU2NyaXB0IHRoYXQgY29tcGlsZXMgdG8gcGxhaW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICd0eXBlc2NyaXB0LnBuZydcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgICAkc2NvcGUuYXdlc29tZVRoaW5ncyA9IG5ldyBBcnJheTxUaGluZz4oKTtcblxuICAgICAgYXdlc29tZVRoaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKGF3ZXNvbWVUaGluZzogVGhpbmcpIHtcbiAgICAgICAgJHNjb3BlLmF3ZXNvbWVUaGluZ3MucHVzaChhd2Vzb21lVGhpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
var flop;
(function (flop) {
    'use strict';
    var Thing = (function () {
        function Thing(title, url, description, logo) {
            this.title = title;
            this.url = url;
            this.description = description;
            this.logo = logo;
            this.rank = Math.random();
        }
        return Thing;
    })();
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            var awesomeThings = [
                {
                    'title': 'AngularJS',
                    'url': 'https://angularjs.org/',
                    'description': 'HTML enhanced for web apps!',
                    'logo': 'angular.png'
                },
                {
                    'title': 'BrowserSync',
                    'url': 'http://browsersync.io/',
                    'description': 'Time-saving synchronised browser testing.',
                    'logo': 'browsersync.png'
                },
                {
                    'title': 'GulpJS',
                    'url': 'http://gulpjs.com/',
                    'description': 'The streaming build system.',
                    'logo': 'gulp.png'
                },
                {
                    'title': 'Jasmine',
                    'url': 'http://jasmine.github.io/',
                    'description': 'Behavior-Driven JavaScript.',
                    'logo': 'jasmine.png'
                },
                {
                    'title': 'Karma',
                    'url': 'http://karma-runner.github.io/',
                    'description': 'Spectacular Test Runner for JavaScript.',
                    'logo': 'karma.png'
                },
                {
                    'title': 'Protractor',
                    'url': 'https://github.com/angular/protractor',
                    'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                    'logo': 'protractor.png'
                },
                {
                    'title': 'Angular Material Design',
                    'url': 'https://material.angularjs.org/#/',
                    'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
                    'logo': 'angular-material.png'
                },
                {
                    'title': 'Sass (Ruby)',
                    'url': 'http://sass-lang.com/',
                    'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
                    'logo': 'ruby-sass.png'
                },
                {
                    'title': 'TypeScript',
                    'url': 'http://www.typescriptlang.org/',
                    'description': 'TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
                    'logo': 'typescript.png'
                }
            ];
            $scope.awesomeThings = new Array();
            awesomeThings.forEach(function (awesomeThing) {
                $scope.awesomeThings.push(awesomeThing);
            });
        }
        return MainCtrl;
    })();
    flop.MainCtrl = MainCtrl;
})(flop || (flop = {}));

angular.module("flop").run(["$templateCache", function($templateCache) {$templateCache.put("app/flop/flop.html","<div ng-controller=\"FlopCtrl\" layout=\"column\" layout-align=\"center center\" layout-margin=\"\"><img class=\"stamp\" src=\"assets/images/flop.png\"><md-input-container><label>Username</label> <input type=\"text\" ng-model=\"user.name\" ng-required=\"true\"></md-input-container><md-input-container><label>Password</label> <input ng-model=\"user.pass\" ng-required=\"true\"></md-input-container><md-button class=\"md-raised\" id=\"login\">Login with Facebook</md-button></div>");
$templateCache.put("app/main/main.html","<div layout=\"vertical\" layout-fill=\"\"><md-content></md-content></div>");}]);