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
    .state('AutoTeachMain', {
      url:'/Autoteach',
      templateUrl: 'client/models/autoTeachMain.html',
      controller: 'AutoTeachCtrl',
      controllerAs: 'vm'
    })
    .state('ToyotaMain', {
      url:'/Toyota',
      templateUrl: 'client/models/toyotaMain.html',
      controller: 'ToyotaCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain', {
      url:'/Component',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentMain.html',
      controller: 'AutoTeachComponentCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.general', {
      url:'/general/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentGeneralDesc.html',
      controller: 'AutoTeachComponentGeneralDescCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.connector', {
      url:'/connector/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentConnector.html',
      controller: 'AutoTeachComponentConnectorCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.wiring', {
      url:'/wiring/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentWiring.html',
      controller: 'AutoTeachComponentWiringCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.location', {
      url:'/location/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentLocation.html',
      controller: 'AutoTeachComponentLocationCtrl',
      controllerAs: 'vm'
    })
}
