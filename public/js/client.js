var app = angular.module('voteApp', ['ngRoute']);

angular.module('voteApp').config(function($routeProvider, $locationProvider){
  $routeProvider.when('/presidential', {
      templateUrl: 'views/presidential.html',
      controller: 'presidentialController'
    })
    .when('/Senate', {
      templateUrl: 'views/Senate.html',
      controller: 'SenateController'
    }).when('/StateSupreme', {
      templateUrl: 'views/StateSupreme.html',
      controller: 'StateSupremeController'
    }).when('/map', {
      templateUrl: 'views/map.html',
      controller: 'mapController'
    });

    $locationProvider.html5Mode(true);
  });


angular.module('voteApp').controller('presidentialController', function($scope, $http){
  $http.get('/candidates/presidential').then(function(response){
    $scope.prez = response.data;
  });
});
// angular.module('olympicApp').controller('fencingController', function($scope, $http){
//   $http.get('/olympian/fencing').then(function(response){
//     $scope.fencer = response.data;
//   });
// });
angular.module('voteApp').controller('StateSupremeController', function($scope, $http){
  $http.get('/candidates/StateSupreme').then(function(response){
    $scope.athlete = response.data;
  });
});
angular.module('voteApp').controller('mapController', function($scope, $http){
  $http.get('/candidates/map').then(function(response){
    $scope.athlete = response.data;
  });
});
angular.module('voteApp').controller('SenateController', function($scope, $http){
  $http.get('/candidates/Senate').then(function(response){
    $scope.athlete = response.data;
  });
});
