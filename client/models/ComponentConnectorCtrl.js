angular
  .module('motogat')
  .controller('ComponentConnectorCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.comp;



    });