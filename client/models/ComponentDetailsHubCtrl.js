angular
  .module('motogat')
  .controller('ComponentDetailsHubCtrl', function($http,$state,$stateParams,$scope,$reactive,$rootScope) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.appid = $stateParams.appid;
    vm.componentName = $stateParams.model;
    vm.compid = $stateParams.compid;
    vm.compname  = $stateParams.comp;

    vm.componentSpecific = 'json/Componentdetails_' + vm.appid + '_' + vm.compid + '.json';



    HTTP.get(Meteor.absoluteUrl(vm.componentSpecific), function(err,result) {
        vm.generalDesc = result.data;
        $scope.$apply();
       });



    });
