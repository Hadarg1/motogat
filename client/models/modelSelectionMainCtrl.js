angular
  .module('motogat')
  .controller('ModelSelectionCtrl', function($http,$state,$scope,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);



    HTTP.get(Meteor.absoluteUrl("json/Models.json"), function(err,result) {

        vm.modelList = result.data;

       });

//    console.log('Model jason');
//    console.log(vm.modelList);

    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });

    vm.gotoMainModel = function(model) {

        console.log(model.name);
        $state.go("ComponentMain",{model:model.name,diagram:model.maindiagarm});
      };

});
