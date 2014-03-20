'use strict';

angular.module('leslieApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/api/movies').success(function(data) {
      // database should have all this info sorted by date already
      console.log(data);
      $scope.moviesEnglish = data;
      $scope.currentBelt = data[0];
    });

    $scope.beltInMotion = false;
    //$scope.currentBelt = 1; // this needs to be considered later with proper DB design

    $scope.beltSelectHandler = function(e) {
      console.log(e);
      // probably need a scope apply here
      $scope.currentBelt = e;
    };
    // may need to call this after render, as it might be height before scope is rendered
    console.log($('#movie-nav-bar').offset().top);
    $('#movie-nav-bar').affix({
      offset: {
        top: $('#movie-nav-bar').offset().top -1 //*note off by one
      }
    });

    // using jQuery click handler is NOT the angular way...as it it outside of Angular engine
    $scope.beltButtonLeftHandler = function() {
      if ($scope.beltInMotion) {
        return;
      }
      $scope.beltInMotion = true;
      $('#belt-wrapper').animate({
        left: ['-=250', 'swing']
      }, 1000, function() {
        $scope.beltInMotion = false
        console.log('Left animation complete');
      }) ;
    };

    $scope.beltButtonRightHandler = function() {
      if ($scope.beltInMotion) {
        return;
      }
      $scope.beltInMotion = true;
      $('#belt-wrapper').animate({
        left: ['+=250', 'swing']
      }, 1000, function() {
        $scope.beltInMotion = false
        console.log('Right animation complete');
      }) ;
    };

  });
