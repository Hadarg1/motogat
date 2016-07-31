angular
  .module('motogat')
  .controller('motogatModelHeader', function($state,$scope,$reactive,$uibModal) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);



    vm.animationsEnabled = true;
    vm.emailuser = '';
    vm.password = '';


    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });


//Sign In function
    vm.signin = function () {
      console.log('in main sign in');
      Meteor.loginWithPassword(vm.emailuser, vm.password,
        vm.$bindToContext((err) => {
          if (err) {
            vm.error = err;
            alert(vm.error);
          }
        })
      );

      };

    //Modal new registration type definition
    vm.registration = function (size) {

      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'client/registration/RegistrationModal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });

      };

      //Modal profile update definition
      vm.updateProfile = function (size) {

        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          templateUrl: 'client/registration/UpdateProfile.html',
          controller: 'ModalInstanceCtrl',
          size: size,
        });

        };

});
