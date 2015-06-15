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
