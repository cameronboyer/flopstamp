module flop {
  'use strict';

  interface IFlop extends ng.IScope {
    date: Date
  }

  export class FlopCtrl {
    /* @ngInject */
    constructor ($scope: IFlop) {
      $scope.date = new Date();
    }

  }
}
