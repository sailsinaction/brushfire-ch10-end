angular.module('brushfire').controller('profilePageController', ['$location', '$routeParams', '$scope', '$http', function($location, $routeParams, $scope, $http){

  // Just a hack so we can type `SCOPE` in the Chrome inspector.
  SCOPE=$scope;

  $scope.me = window.SAILS_LOCALS.me;

  /////////////////////////////////////////////////////////////////////////////////
  // When HTML is rendered... (i.e. when the page loads)
  /////////////////////////////////////////////////////////////////////////////////

  // Set up initial objects
  // (kind of like our schema for the page)
  $scope.userProfile = {
    properties: {},
    errorMsg: '',
    saving: false,
    loading: false,
    noProfile: false
  };

  $scope.userProfile.loading = true;

  $scope.removeProfile = function() {

    // console.log('the change userprofile is: ', $scope.userProfile);

    // var theRoute = '/user/removeProfile/' + $scope.userProfile.properties.id;
    // var theRoute = '/user/removeProfile/' + $scope.me.id;
    $http.put('/user/removeProfile', {
        deleted: true
      })
      .then(function onSuccess(sailsResponse) {

        // console.log('sailsResponse: ', sailsResponse);
          // $scope.userProfile.properties.gravatarURL = sailsResponse.data.gravatarURL;
          window.location = '/signup';
          // 
          // toastr.success('Password Updated!');

        $scope.userProfile.loading = false;
      })
      .catch(function onError(sailsResponse) {
        // console.log('sailsresponse: ', sailsResponse)
        // Otherwise, display generic error if the error is unrecognized.
        $scope.userProfile.errorMsg = 'An unexpected error occurred: ' + (sailsResponse.data || sailsResponse.status);

      })
      .finally(function eitherWay() {
        $scope.loading = false;
      });
  };

  $scope.deleteProfile = function() {

    var theRoute = 'user/delete/' + $routeParams.id;

    $http.delete(theRoute)
    .then(function onSuccess(deletedProfile){
      window.location = '#/signup';
    })
    .catch(function onError(err){
      $scope.userProfile.errorMsg = 'An unexpected error occurred: ' + err;
    });
  };

}]);
