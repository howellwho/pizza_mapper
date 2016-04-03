console.log('linked')
var app = angular.module('pizzaMapper', [
  'ui.router',
  'ngResource',
  'map',
  'ngMap'
]);
app.config(config);
app.controller('HomeController', HomeController);

app.controller('HomeController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});

function HomeController() {
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
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: 'templates/home.html'
      });
  }
