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
    vm.listdata = [

    ];
    vm.showData = function() {
      // alert(this.data.foo);
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


app.controller('SignupController', function($location, Account){
  var vm = this;
  vm.new_user = {};//form data

  vm.signup = function(){
    Account
      .signup(vm.new_user)
      .then(
        function (response) {
          //clear sign up form
          vm.new_user = {};
          //redirect
          $location.path('/profile');
        }
      );
  };
});

app.controller('LoginController', function($location, Account){
  var vm = this;
  vm.new_user = {}; //form data

  vm.login = function(){
    Account
     .login(vm.new_user)
     .then(function(){
       //clear form
       vm.new_user = {};
       $location.path('/profile');
     })
  };
});

app.controller('LogoutController', function($location, Account){
  Account.logout()
  $location.path('/');
});

app.controller('MainController', function(Account){
  vm = this;
  vm.currentUser = function(){
    return Account.currentUser();
  }
});

app.controller('ProfileController', function(){
});
//added in 'Account' fixed error
app.service('Account', Account);
app.config(configRoutes);

//Routes
configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('configRoutes');
    //this allows us to use routes without hash params
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

    };

    // Services //
    Account.$inject = ["$http", "$q", "$auth"]; // minification protection
    function Account($http, $q, $auth) {
      var self = this;
      self.user = null;

      self.signup = signup;
      self.login = login;
      self.logout = logout;
      self.currentUser = currentUser;
      self.getProfile = getProfile;
      self.updateProfile = updateProfile;

      function signup(userData) {
        return (
        $auth.signup(userData)
          .then(function(response){
            $auth.setToken(response.data.token);
          })
        )
    };

      function login(userData) {
        return (
          $auth
            .login(userData) // login
            .then(
              function onSuccess(response) {
                //set token
                $auth.setToken(response.data.token)
              },

              function onError(error) {
                console.error(error);
              }
            )
        );
      }

      function logout() {
        // returns a promise
        //logout the user by removing their jwt token (using satellizer)
        return (
          $auth.logout()
            .then(function() {
              self.user = null;
            })
          // Make sure to also wipe the user's data from the application:
          // self.user = null;
          // returns a promise
        )
      }

      function currentUser() {
        if ( self.user ) { return self.user; }
        if ( !$auth.isAuthenticated() ) { return null; }

        var deferred = $q.defer();
        getProfile().then(
          function onSuccess(response) {
            self.user = response.data;
            deferred.resolve(self.user);
          },

          function onError() {
            $auth.logout();
            self.user = null;
            deferred.reject();
          }
        )
        self.user = promise = deferred.promise;
        return promise;

      }

      function getProfile() {
        return $http.get('/api/me');
      }

      function updateProfile(profileData) {
        return (
          $http
            .put('/api/me', profileData)
            .then(
              function (response) {
                self.user = response.data;
              }
            )
        );
      }

  }
