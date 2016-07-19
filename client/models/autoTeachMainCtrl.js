angular
  .module('motogat')
  .controller('AutoTeachCtrl', function($state,$scope,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);

    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });

    vm.goComponet = function(compo){
      //console.log(audition);
      console.log('the comp to send');
      console.log(compo);
      $state.go("AutoTeachComponentMain.general",{comp:compo});
    };

});
