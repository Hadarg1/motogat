angular
  .module('motogat')
  .controller('motogatModelHeader', function($http,$state,$scope,$reactive,$uibModal,$rootScope) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);



    vm.animationsEnabled = true;
    vm.emailuser = '';
    vm.password = '';
    vm.complist = '';


    vm.componentFile = 'json/Components_' + vm.appid + '.json';


    HTTP.get(Meteor.absoluteUrl(vm.componentFile), function(err,result) {
        vm.complist = result.data;
        $scope.$apply();
       });


    vm.helpers({
     isLoggedIn() {
       return !!Meteor.userId();
     },
     currentUser() {
       return Meteor.user();
     }
    });

    vm.goComponet = function(comp){

      $rootScope.compname = comp.name;


    //  $state.go("ComponentHub.General",{model:$rootScope.model,comp:comp.name,compid:comp.appid,appid:vm.appid});
      $state.go("ComponentDetailHub",{model:$rootScope.model,comp:comp.name,compid:comp.appid,appid:vm.appid});
    };

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
