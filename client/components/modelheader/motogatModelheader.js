angular.module('motogat')
  .component('motogatModelheader', {
    templateUrl: 'client/components/modelheader/motogatModelHeader.html',
    bindings: {
    appid: '<'
    },
    controller: 'motogatModelHeader',
    controllerAs: 'modelheader'
  });
