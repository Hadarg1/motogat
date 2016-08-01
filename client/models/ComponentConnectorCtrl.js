angular
  .module('motogat')
  .controller('ComponentConnectorCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.comp;
    vm.appid = $stateParams.appid;
    vm.compid = $stateParams.compid;

    vm.componentSpecific = 'json/Componentdetails_' + vm.appid + '_' + vm.compid + '.json';

    HTTP.get(Meteor.absoluteUrl(vm.componentSpecific), function(err,result) {
        vm.generalDesc = result.data;
        $scope.$apply();
       });



    });
