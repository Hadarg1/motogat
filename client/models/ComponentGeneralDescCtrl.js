angular
  .module('motogat')
  .controller('ComponentGeneralDescCtrl', function($state,$stateParams,$scope,$reactive,$rootScope) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    console.log($stateParams);
    vm.componentName = $stateParams.comp;
    vm.appid = $stateParams.appid;
    vm.compid = $stateParams.compid;

    vm.componentSpecific = 'json/Componentdetails_' + vm.appid + '_' + vm.compid + '.json';

    console.log('general desc file name');
    console.log(vm.componentSpecific);


    HTTP.get(Meteor.absoluteUrl(vm.componentSpecific), function(err,result) {
        vm.generalDesc = result.data;
        $scope.$apply();
       });

  


    });
