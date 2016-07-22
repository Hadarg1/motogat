angular
  .module('motogat')
  .controller('ComponentGeneralDescCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    console.log($stateParams);
    vm.componentName = $stateParams.comp;



    });
