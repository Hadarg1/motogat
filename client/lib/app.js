//import angular from 'angular';
//import angularMeteor from 'angular-meteor';
//import uiRouter from 'angular-ui-router';
//import 'bootstrap/dist/css/bootstrap.css';

//import { Meteor } from 'meteor/meteor';

//angular.module('brgo', ['angularMeteor','ui.router','ui.bootstrap']);
//angular.module('brgo', ['angularMeteor','uiRouter','ui.bootstrap']);

//function onReady() {
//  angular.bootstrap(document, ['brgo'], {
//    strictDi: true
//  });

//}

//if (Meteor.isCordova)
//  angular.element(document).on("deviceready", onReady);
//else
//  angular.element(document).ready(onReady);

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularBootstrap from 'angular-ui-bootstrap';
import angularUiRouter from 'angular-ui-router'
//import angularPromiser from 'angular-meteor-promiser';
//import 'angular-filter';
//import uiRouter from 'angular-ui-router';
//import 'bootstrap/dist/css/bootstrap.css';

//import { Meteor } from 'meteor/meteor';

//angular.module('brgo', ['angularMeteor','ui.router','ui.bootstrap']);
//angular.module('brgo', [angularMeteor, 'ui.router','accounts.ui','ui.bootstrap']);
//angular.module('motogat', [angularMeteor,angularUiRouter,'accounts.ui','angular.filter',angularBootstrap,angularPromiser]);
angular.module('motogat', [angularMeteor, angularUiRouter, angularBootstrap]);


function onReady() {
  angular.bootstrap(document, ['motogat'], {
    strictDi: true
  });

}

//Accounts.ui.config({
//  passwordSignupFields: "USERNAME_AND_EMAIL"
//});

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
