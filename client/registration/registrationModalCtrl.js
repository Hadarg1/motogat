angular
  .module('motogat')
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$state) {


  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.logout = function () {
    Accounts.logout();
    $state.go("app");
  };

});
