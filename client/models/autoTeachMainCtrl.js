angular
  .module('motogat')
  .controller('AutoTeachCtrl', function($state,$scope,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);

    vm.model = 'AutoTeach';

    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });

    vm.goComponet = function(compo){
      //console.log('the comp to send');
      //console.log(compo);
      console.log('the model is');
      console.log(vm.model);
      $state.go("ComponentMain.general",{comp:compo,model:vm.model});
    };

});
