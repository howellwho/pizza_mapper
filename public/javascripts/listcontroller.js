app.controller('listcontroller', function($scope, $http){
  var vm= this;
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
    console.log("hit render list", selectedList);
    places = selectedList.places;
    console.log("hi daniel", hc.positions);
    // $scope.positions = [];
    // places.forEach(function(placeID){
    //   $http
    //   .get('/places/api/' + placeID)
    //   .then(function(response){
    //     console.log(response.data);
    //     // re render map with new pin data
    //     // vm.position.push(response.data.places[i])
    //   })
    // });
  }
})
