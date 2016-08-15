angular.module('voteApp').controller('MainController', function($scope, DataService){
  $http({
    method: 'GET',
    url: 'https://api.open.fec.gov/v1/candidates/?has_raised_funds=true&office=P&q=Clinton&q=Trump&q=Gary%20Johnson&q=Jill%20Stein&incumbent_challenge=O&candidate_status=C&party=DEM&party=REP&party=LIB&party=GRE&election_year=2016&api_key=zbb0ed6rFcQr1mmE36AGSF7zhUoTiUsqzzlLy4tg&page=1&year=2016&per_page=50&sort_hide_null=true
  '
  }).then(function successCallback(response) {
    // $http.post()
    console.log('results[0].candidate');
    console.log("success");
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('API error');
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

})
