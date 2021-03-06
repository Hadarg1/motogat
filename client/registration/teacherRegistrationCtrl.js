angular
  .module('motogat')
  .controller('TeacherRegistrationCtrl', function($state,$scope,$reactive,$uibModal) {
            //$scope.num = 0;
    var vm = this;
    $reactive(vm).attach($scope);

    vm.animationsEnabled = true;
    vm.teacherRegistration = {};
    var currentDate = new Date();
    console.log('original current data');
    console.log(currentDate);
    d = currentDate.setDate(currentDate.getDate() - 1);
    var expiration = new Date(d);
    console.log('exyended current data');
    console.log(expiration);
    vm.teacherRegistration.type = 'Teacher';

    vm.registerTeacher = () => {
      Accounts.createUser({
          username: vm.teacherRegistration.name,
          email: vm.teacherRegistration.email,
          password: vm.teacherRegistration.pass1,
          profile: {
            type: vm.teacherRegistration.type,
            firstName: vm.teacherRegistration.fname,
            lastName: vm.teacherRegistration.lname,
            phone: vm.teacherRegistration.phoneNum,
            dob: vm.teacherRegistration.dob,
            proffesion: vm.teacherRegistration.proffesion,
            expiration: expiration,
            tcAcknowladge: vm.teacherRegistration.TC
            }
          },
          vm.$bindToContext((err) => {
            console.log('error');
            console.log(err);
            if (err) {
              vm.error = err;
              alert(vm.error);
            } else {
            //  $state.go("####");
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
