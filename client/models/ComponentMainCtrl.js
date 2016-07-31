angular
  .module('motogat')
  .controller('ComponentCtrl', function($state,$stateParams,$scope,$reactive) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.componentName = $stateParams.model;
    vm.diagram = $stateParams.diagram
    vm.appid = $stateParams.appid;
    console.log(vm.componentName);
    console.log('vm.appid');
    console.log(vm.appid);

    vm.componentFile = 'json/Components_' + vm.appid + '.json';
    console.log(vm.componentFile);

    //HTTP.get(Meteor.absoluteUrl("json/Components_.json"), function(err,result) {

  //      vm.modelList = result.data;

    //   });



    });
