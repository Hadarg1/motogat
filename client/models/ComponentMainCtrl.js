angular
  .module('motogat')
  .controller('ComponentCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.model;
    vm.diagram = $stateParams.diagram



    });
