angular
  .module('motogat')
  .controller('StudentRegistrationCtrl', function($state,$scope,$reactive,$uibModal) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.animationsEnabled = true;
    vm.studentRegistration = {};
    vm.studentRegistration.type = 'Student';

    vm.registerStudent = () => {
      Accounts.createUser({
          username: vm.studentRegistration.name,
          email: vm.studentRegistration.email,
          password: vm.studentRegistration.pass1,
          profile: {
            type: vm.studentRegistration.type,
            firstName: vm.studentRegistration.fname,
            lastName: vm.studentRegistration.lname,
            tcAcknowladge: vm.studentRegistration.TC
            }
          },
          vm.$bindToContext((err) => {
            if (err) {
              vm.error = err;
            } else {
              //$state.go("#####");
            }
          })
        );
      }


    //Modal definition
    vm.displayTC = function (size) {
    //  console.log(vm.animationsEnabled);
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'client/registration/TCModal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
      });

      };





});
