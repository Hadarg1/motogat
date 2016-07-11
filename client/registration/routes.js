angular
  .module('motogat')
  .config(routerConfig);


/** @ngInject */
/* Domain Expert routing */
function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider

    .state('studentRegistration', {
      url:'/newStudent',
      templateUrl: 'client/registration/studentRegistration.html',
      controller: 'StudentRegistrationCtrl',
      controllerAs: 'vm'
    })
    .state('teacherRegistration', {
      url:'/newTeacher',
      templateUrl: 'client/registration/teacherRegistration.html',
      controller: 'TeacherRegistrationCtrl',
      controllerAs: 'vm'
    })
    .state('superteacherRegistration', {
      url:'/newSuperTeacher',
      templateUrl: 'client/registration/superTeacherRegistration.html',
      controller: 'SuperTeacherRegistrationCtrl',
      controllerAs: 'vm'
    })
}
