angular
    .module('motogat')
    .config(routerConfig);


  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('app.about', {
        url:'/about',
        templateUrl: 'client/general/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'main'
      })
      .state('app.contact', {
        url:'/contact',
        templateUrl: 'client/general/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'main'
      })
      .state('app', {
        url:'/',
        templateUrl: 'client/home/mainhome.html',
        controller: 'MainHomeController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
