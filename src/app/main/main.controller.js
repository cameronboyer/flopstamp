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
