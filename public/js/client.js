var app = angular.module('voteApp', ['ngRoute']);

//
// angular.module('voteApp').config(function($routeProvider, $locationProvider){
//   $routeProvider.when('/', {
//     templateUrl: 'views/.html',
//     controller: 'controller'
//   })
//   // .when('/', {
//   //
//   // })
// })
// //
// // // module.exports = router;
app.controller('MainController', function($scope, $http){
  $scope.showError = false;
  // $scope.people = [];
  // $scope.patronuses = [];
  // getPeople();
  // getPatronsues();
  // function getPeople(){
  // $http.get('/people').then(handlePeopleSuccess, handleFailure);
  // }
  // function getPatronsues(){
  // $http.get('/patronuses').then(handlePatronSuccess, handleFailure);
  // }
  function handleSuccess(response) {
    // $scope.people = response.data.rows;
    console.log('Success', response);
    // console.log($scope.people);
  }
  // function handlePatronSuccess(response) {
  //   $scope.patronuses = response.data;
  //   console.log('Success', response);
  //   console.log($scope.patronuses);
  // }
  // function handlePostPeople(response){
  //   console.log('success', response)
  // }

  function handleFailure(response) {
    console.log('Failure', response);
  }
//   $scope.submitName = function(){
//     var sendData = {};
//     sendData.first_name = $scope.nameIn;
//     console.log(sendData);
//     $http.post('/people', sendData).then(handlePostPeople,handleFailure);
//   }
//   $scope.submitPatron = function (){
//     var sendData = {};
//     sendData.patronus = $scope.patronIn;
//     $http.post('/patronuses', sendData).then(handlePostPeople, handleFailure);
//   }
})
