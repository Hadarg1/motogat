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
    .state('AutoTeachComponentMain', {
      url:'/Autoteach/Component',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentMain.html',
      controller: 'AutoTeachComponentCtrl',
      controllerAs: 'vm'
    })
    .state('AutoTeachComponentMain.general', {
      url:'/Autoteach/Component/general/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentGeneralDesc.html',
      controller: 'AutoTeachComponentGeneralDescCtrl',
      controllerAs: 'vm'
    })
    .state('AutoTeachComponentMain.connector', {
      url:'/Autoteach/Component/connector/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentConnector.html',
      controller: 'AutoTeachComponentConnectorCtrl',
      controllerAs: 'vm'
    })
    .state('AutoTeachComponentMain.wiring', {
      url:'/Autoteach/Component/wiring/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentWiring.html',
      controller: 'AutoTeachComponentWiringCtrl',
      controllerAs: 'vm'
    })
    .state('AutoTeachComponentMain.location', {
      url:'/Autoteach/Component/location/:comp',
      params: {
            comp: null
        },
      templateUrl: 'client/models/autoTeachComponentLocation.html',
      controller: 'AutoTeachComponentLocationCtrl',
      controllerAs: 'vm'
    })
}
