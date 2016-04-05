var app = angular.module('pizzaMapper', [
  'ui.router',
  'ngResource',
  'ngMap',
  'ngAnimate'
  // 'map'
]);

app.config(config);
app.controller('HomeController', function($scope, $http, NgMap){

//pings Google places and populates pin on map
  var vm = this;
  vm.types = "['establishment']";
  vm.placeChanged = function() {
    vm.place = this.getPlace();
    vm.address = vm.place.vicinity
    vm.phone = vm.place.formatted_phone_number
    vm.web = vm.place.website
    // vm.pic = vm.place.photos[0].getURL()
    // vm.picture = vm.place.something.here.is.the.picture
    console.log('place', vm.place);
    console.log('location', vm.place.geometry.location);
  }
  vm.search = function(){
    console.log('clicked searching... ', vm.address);
    this.address = vm.address;
  }

//populates map on page
  NgMap.getMap().then(function(map) {
    vm.map = map;
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });


});


app.config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
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
