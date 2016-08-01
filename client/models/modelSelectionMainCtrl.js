angular
  .module('motogat')
  .controller('ModelSelectionCtrl', function($http,$state,$scope,utilsService,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);


    vm.filename = 'json/Models.json';
    vm.jsonFile = utilsService.getjsonfile(vm.filename);
    

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

        $state.go("ComponentMain",{model:model.name,diagram:model.maindiagarm,appid:model.appid});
      };

});
