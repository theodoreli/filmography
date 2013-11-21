'use strict';

angular.module('leslieApp')
  .controller('MainCtrl', function ($scope, $http) {
    var dataFormat = [
      {
        'meta': {
          'imgPath': '',
          'title': '',
          'year': ''
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
    MovieCollection.prototype.addMovie = function(title, imgPath, year, synop, actors, awards) {
      this.collection.push(
        {
          'meta': {
            'imgPath': imgPath,
            'title': title,
            'year': year
          },
          'synop': synop,
          'actors': actors,
          'awards': awards
        }
      );
    };

    var moviesEnglish = new MovieCollection();
    moviesEnglish.addMovie(
      'Days of Being Wild',
      'images/days-of-being-wild.jpg',
      1990,
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
      'Mark Goh',
      ['Chow Yun-fat', 'Leslie Cheung', 'Ti Lung'],
      {
        1991: ['Best Picture', 'Best Director'],
        1997: ['Speicla Award']
      }
    );

    console.log(moviesEnglish);
    $scope.moviesEnglish = moviesEnglish;

  });
