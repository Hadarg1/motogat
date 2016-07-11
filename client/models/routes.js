angular
  .module('motogat')
  .config(routerConfig);


/** @ngInject */
/* Domain Expert routing */
function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider

    .state('ModelSelection', {
      url:'/modelSelection',
      templateUrl: 'client/models/modelSelectionMain.html',
      controller: 'ModelSelectionCtrl',
      controllerAs: 'vm'
    })

}
