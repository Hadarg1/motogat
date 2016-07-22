angular
  .module('motogat')
  .controller('ToyotaCtrl', function($state,$scope,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);

    vm.model = 'Toyota';

    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });

    vm.goComponet = function(compo){
      console.log('the comp to send');
      console.log(compo);
      $state.go("ComponentMain.general",{comp:compo,model:vm.model});
    };

});
