console.log('linked')
var app = angular.module('pizzaMapper', ['ui.router', 'ngResource']);
app.config(config);
app.controller('PizzaController', PizzaController);

function PizzaController() {
  this.test = "test";
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('config');
    //this allows us to use routes without hash params!
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    // for any unmatched URL redirect to /
    $urlRouterProvider.otherwise("/");

     $stateProvider
      .state('home', {
        url: "/",
        controller: 'PizzaController',
        controllerAs: 'home',
        templateUrl: 'templates/home.html'
      });
  }
