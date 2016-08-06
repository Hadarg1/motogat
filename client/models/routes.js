angular
  .module('motogat')
  .config(routerConfig);


/** @ngInject */
/* Domain Expert routing */
function routerConfig($stateProvider) {

  $stateProvider

    .state('ModelSelection', {
      url:'/modelSelection',
      templateUrl: 'client/models/modelSelectionMain.html',
      controller: 'ModelSelectionCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentMain', {
      url:'/maincomponent/:model',
      params: {
            model: null,
            diagram: null,
            appid: null,
        },
      templateUrl: 'client/models/ComponentMain.html',
      controller: 'ComponentCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentHub', {
      url:'/componentHub/:model',
      params: {
            model: null,
            appid: null,
            compid: null,
            companame: null
        },
      templateUrl: 'client/models/ComponentHub.html',
      controller: 'ComponentHubCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentDetailHub', {
      url:'/componentDetail/:model',
      params: {
            model: null,
            appid: null,
            compid: null,
            comp: null
        },
      templateUrl: 'client/models/ComponentDetailsHub.html',
      controller: 'ComponentDetailsHubCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentHub.General', {
      url:'/generalDesc/:comp',
      params: {
            model: null,
            comp: null,
            compid: null,
            appid: null
        },
      templateUrl: 'client/models/ComponentGeneralDesc.html',
      controller: 'ComponentGeneralDescCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentHub.Wiring', {
      url:'/wiring/:comp',
      params: {
            model: null,
            comp: null,
            compid: null,
            appid: null
        },
      templateUrl: 'client/models/ComponentWiring.html',
      controller: 'ComponentWiringCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentHub.Connector', {
      url:'/connector/:comp',
      params: {
        model: null,
        comp: null,
        compid: null,
        appid: null
        },
      templateUrl: 'client/models/ComponentConnector.html',
      controller: 'ComponentConnectorCtrl',
      controllerAs: 'vm'
    })
    .state('ComponentHub.Location', {
      url:'/location/:comp',
      params: {
        model: null,
        comp: null,
        compid: null,
        appid: null
        },
      templateUrl: 'client/models/ComponentLocation.html',
      controller: 'ComponentLocationCtrl',
      controllerAs: 'vm'
    })
}
