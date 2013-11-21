'use strict';

angular.module('leslieApp')
  .controller('MainCtrl', function ($scope, $http) {
    var dataFormat = [
      {
        'meta': {
          'imgPath': '',
          'title': '',
          'year': '',
          'id': 1
        },
        'synop': '',
        'actors': [''],
        'awards': {
          2001: ['']
        }
      }
    ];

    function MovieCollection() {
      this.collection = [];
    }

    // actors = [], awards = {}
    MovieCollection.prototype.addMovie = function(title, imgPath, year, id, synop, actors, awards) {
      this.collection.push(
        {
          'meta': {
            'imgPath': imgPath,
            'title': title,
            'year': year,
            'id': id
          },
          'synop': synop,
          'actors': actors,
          'awards': awards // awards structure needs to accompany event
        }
      );
    };

    var moviesEnglish = new MovieCollection();
    moviesEnglish.addMovie(
      'Days of Being Wild',
      'images/days-of-being-wild.jpg',
      1990,
      1,
      'Teddy boy',
      ['Maggie Cheung', 'Andy Lau', 'Carina Lau', 'Jacky Cheung', 'Tony Leung Chiu-Wai'],
      {
        1991: ['Best Picture', 'Best Director'],
        1997: ['Speicla Award']
      }
    );
    moviesEnglish.addMovie(
      'A Better Tomorrow',
      'images/a-better-tomorrow.jpg',
      1986,
      2,
      'Mark Goh',
      ['Chow Yun-fat', 'Leslie Cheung', 'Ti Lung'],
      {
        1991: ['Best Picture', 'Best Director'],
        1997: ['Speicla Award']
      }
    );

    console.log(moviesEnglish);
    $scope.moviesEnglish = moviesEnglish;
    //$scope.currentBelt = 1; // this needs to be considered later with proper DB design

    $scope.clickHandler = function(e) {
      console.log(e);
      // probably need a scope apply here
      $scope.currentBelt = e;
      console.log($scope.currentBelt);
    };

  });
