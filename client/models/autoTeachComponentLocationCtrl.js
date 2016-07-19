angular
  .module('motogat')
  .controller('AutoTeachComponentLocationCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.comp;



    });
