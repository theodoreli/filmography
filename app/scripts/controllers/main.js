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
          'actors': actors, // just array
          'awards': awards
        }
      );
    };

    /*awards object is to be
      {
        year: {
          Awarding body: [awards]
        }  
      } 

    */

    var moviesEnglish = new MovieCollection();
    moviesEnglish.addMovie(
      'Days of Being Wild',
      'images/days-of-being-wild.jpg',
      1990,
      1,
      'Teddy boy',
      ['Maggie Cheung', 'Andy Lau', 'Carina Lau', 'Jacky Cheung', 'Tony Leung Chiu-Wai'],
      {
        1991: {
          'Hong Kong Film Awards': ['Best Picture', 'Best Director, Best Actor (Leslie Cheung), Best Art Direction, Best Cinematography']
        },
        1997: {
          'Golden Bauhinia Awawrds': ['Special Award (Best Hong Kong film of last 10 years']
        }
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
        1985: {
          'Hong Kong Film Awards': ['Best Picture']
        }
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
