var app = angular.module('pizzaMapper', [
  'ui.router',
  'ngResource',
  'ngMap',
  'ngAnimate',
  'satellizer'
]);

app.controller('HomeController', function ($scope, $http, NgMap){
  console.log(NgMap + "hitting ngmap");
  //pings Google places and populates pin on map
    var vm = this;
    vm.types = "['establishment']";
    vm.placeChanged = function() {
      vm.place = this.getPlace();
      vm.address = vm.place.vicinity
      vm.phone = vm.place.formatted_phone_number
      vm.web = vm.place.website
      // vm.pic = vm.place.photos[0].getURL()
      console.log('place', vm.place);
      console.log('location', vm.place.geometry.location);
    }
    vm.search = function(){
      console.log('clicked searching... ', vm.address);
      this.address = vm.address;
    }
  //populates map on page
    NgMap.getMap().then(function(map) {
      console.log(getMap + "getmap");
      console.log(NgMap + "ngmap")
      vm.map = map;
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
});


app.controller('SignupController', function(){
  console.log('hello from signup controller');
});

app.controller('LoginController', function(){
  console.log('login controller live');
});

app.controller('LogoutController', function(){
});

app.controller('MainController', function(){
});

// MainController.$inject = ["Account"]; // minification protection
// function MainController (Account) {
//   var vm = this;
//
//   vm.currentUser = function() {
//    return Account.currentUser();
//  };
//
// }
app.controller('ProfileController', function(){
});


// app.service('Account', Account)
app.config(configRoutes);

//routes
configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('configRoutes');
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
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupController',
        controllerAs: 'sc',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
// };
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        controllerAs: 'lc',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
  // }
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutController',
        resolve: {
          loginRequired: loginRequired
        }
      })
    // }
      .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile',
        resolve: {
          loginRequired: loginRequired
        }
      });

      function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }

      function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }

    }
