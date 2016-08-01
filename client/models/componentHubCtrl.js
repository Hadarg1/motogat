angular
  .module('motogat')
  .controller('ComponentHubCtrl', function($http,$state,$stateParams,$scope,$reactive,$rootScope) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.appid = $stateParams.appid;
    vm.componentName = $stateParams.model;
    vm.compid = $stateParams.compid;
    vm.compname  = $stateParams.comp;

    vm.goComponetGeneral = function(){

      $state.go("ComponentHub.General",{model:$rootScope.model,comp:$rootScope.compname,compid:vm.compid,appid:vm.appid});
      };

    vm.goComponetWiring = function(){

      $state.go("ComponentHub.Wiring",{model:$rootScope.model,comp:$rootScope.compname,compid:vm.compid,appid:vm.appid});
      };

    vm.goComponetConnector = function(){

      $state.go("ComponentHub.Connector",{model:$rootScope.model,comp:$rootScope.compname,compid:vm.compid,appid:vm.appid});
      };

    vm.goComponetLocation = function(){

      $state.go("ComponentHub.Location",{model:$rootScope.model,comp:$rootScope.compname,compid:vm.compid,appid:vm.appid});
      };
    });
