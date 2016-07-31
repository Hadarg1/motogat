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
      url:'/:model/Component',
      params: {
            comp: null,
            diagram: null
        },
      templateUrl: 'client/models/ComponentMain.html',
      controller: 'ComponentCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.general', {
      url:'/general/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/ComponentGeneralDesc.html',
      controller: 'ComponentGeneralDescCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.connector', {
      url:'/connector/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/ComponentConnector.html',
      controller: 'ComponentConnectorCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.wiring', {
      url:'/wiring/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/ComponentWiring.html',
      controller: 'ComponentWiringCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain.location', {
      url:'/location/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/ComponentLocation.html',
      controller: 'ComponentLocationCtrl',
      controllerAs: 'vm'
    })
}
