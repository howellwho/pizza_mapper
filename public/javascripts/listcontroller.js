app.controller('listcontroller', function($scope, $http){
  var vm= this;
  vm.all = [];

  vm.getAllLists = function() {
    $http
    .get('/lists/api')
    .then(function(response){
      console.log("ALL LISTS:", response.data);
      // re render map with new pin data
      // vm.position.push(response.data.places[i])
      vm.all = response.data
    })

  }

  // vm.getAllLists();

  vm.renderListWhenClicked = function (list) {
    console.log("hit render list");
    listId = list._id
    $http
    .get('/lists/api/' + listId)
    .then(function(response){
      console.log(repsonse.data);
      // re render map with new pin data
      // vm.position.push(response.data.places[i])
    })
  }
})
