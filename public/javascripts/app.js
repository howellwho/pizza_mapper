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
    $scope.lists = [];
    $scope.list = []
    vm.positions = [];
    vm.types = "['establishment']";
    vm.placeChanged = function() {
      vm.place = this.getPlace();
      vm.address = vm.place.vicinity
      vm.phone = vm.place.formatted_phone_number
      vm.web = vm.place.website
      // vm.renderListWhenClicked =renderListWhenClicked;


      }
      vm.all = [];
    vm.listInfo = {}

    vm.getAllLists = function() {
      $http
      .get('/lists/api')
      .then(function(response){
        console.log("ALL LISTS:", response.data);
        // re render map with new pin data
        // vm.position.push(response.data.places[i])
        vm.all

        $scope.lists = response.data.lists
      })

    }

    // vm.getAllLists();

    vm.renderListWhenClicked = function (selectedList) {
      console.log("hit render list in HC", selectedList);
      places = selectedList.places;
      // console.log("hi daniel", vm.positions);
      vm.positions = [];
      // $scope.positions = [];
      vm.positions.push({pos:[37.777548,-122.438007]})
      places.forEach(function(placeID){
        // console.log("this should be the data for the selectedList", placeID);
        $http
        .get('/places/api/' + placeID)
        .then(function(response){
          // console.log("this should be the data for the selectedList", response.data);
          // re render map with new pin data
          console.log("raw data", response.data.place[0]);
          var rawData = response.data.place[0];
          var cleanData = {};
          cleanData._id = rawData._id;
          cleanData.pos = [rawData.lat, rawData.long];
          cleanData.name = rawData.name;

          vm.positions.push(cleanData);
          console.log("vm.positions", vm.positions);
        })
      });
    }

    // vm.renderListWhenClicked = function (list) {
    //   console.log("hit render list");
    //   listId = list._id
    //   $http
    //   .get('/lists/api/' + listId)
    //   .then(function(response){
    //     console.log(response.data);
    //     // re render map with new pin data
    //     // vm.position.push(response.data.places[i])
    //   })

    //
    //   // vm.pic = vm.place.photos[0].getURL()
    //   console.log('place', vm.place);
    //   console.log('location', vm.place.geometry.location);
    // }


    vm.search = function(){
      console.log('clicked searching... ', vm.address);
      this.address = vm.address;
    }
    vm.showData = function() {
      //alert(this.data.foo);
      //get db places data
        // $http.get('/lists/api/')
        //   .then(function(response) {
            // console.log("places: ", response.data.lists[0].places);
            var marker = {};
            // TODO: change this to select one list
            // response.data.lists.forEach(function(list){
            //   list.places.forEach(function(place){
                // console.log(place);
                // $scope.lists.push(place);
                $http.get('/places/api/')
                  .then(function(response){
                    console.log(response.data.places);
                    response.data.places.forEach(function(place){
                      vm.positions.push({
                        id: place._id,
                        pos: [place.lat, place.long],
                        name: place.name,
                        phone: place.phone,
                        website: place.website,
                        address: place.address,
                        showDetail: function(e){
                          this.map.showInfoWindow('joint2', place._id);
                          console.log("id is ", place._id)
                        }
                      });
                    })
                    // console.log("this is $scope.positions: ",$scope.positions);
                  })


              // })
            // });
          // })
      };


  //populates map on page
    NgMap.getMap().then(function(map) {
      console.log(getMap + "getmap");
      console.log(NgMap + "ngmap")
      vm.map = map;
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
    console.log("all lists FROM MAP: ", $scope.lists);
    vm.showData();
});


app.controller('SignupController', function($location, Account){
  var sc = this;
  sc.new_user = {};//form data

  sc.signup = function(){
    Account
      .signup(sc.new_user)
      .then(
        function (response) {
          //clear sign up form
          sc.new_user = {};
          //redirect
          $location.path('/profile');
        }
      );
    };
});

app.controller('LoginController', function($location, Account){
  var lc = this;
  lc.new_user = {}; //form data

  lc.login = function(){
    Account
     .login(lc.new_user)
     .then(function(){
       //clear form
       lc.new_user = {};
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
        controllerAs: 'vm',
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
