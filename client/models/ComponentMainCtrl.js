angular
  .module('motogat')
  .controller('ComponentCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.model;
    vm.diagram = $stateParams.diagram
    vm.appid = $stateParams.appid;

    vm.componentFile = 'json/Components_' + vm.appid + '.json';
    console.log(vm.componentFile);

    HTTP.get(Meteor.absoluteUrl(vm.componentFile), function(err,result) {

        vm.compList = result.data;
        console.log(vm.compList);


       });





    });
