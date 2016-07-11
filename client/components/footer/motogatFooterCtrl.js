angular
  .module('motogat')
  .controller('motogatFooter', function($state,$scope,$reactive) {

    var vm = this;
    $reactive(vm).attach($scope);

});
