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
      'Days of Being Wild (A Fei jingjyuhn) is a 1990 Hong Kong film directed by Wong Kar-wai. The film stars some of the best-known actors and actresses in Hong Kong, including Leslie Cheung, Andy Lau, Maggie Cheung, Carina Lau, Jacky Cheung and Tony Leung Chiu-Wai. Days of Being Wild also marks the first collaboration between Wong and cinematographer Christopher Doyle, with whom he has since made eight films.[2][3] The movie forms the first part of an informal trilogy, together with In the Mood for Love (released in 2000) and 2046 (released in 2004).',
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
    moviesEnglish.addMovie(
      'Farewell My Concubine',
      'images/farewell-my-concubine.jpg',
      1993,
      3,
      'Classic, Bawang Bie Ji. Central works of the Fifth generation movement',
      ['Leslie Cheung', 'Gong Li'],
      {
        1992: {
          'National Board of Review (USA)': ['Best Foreign Film']
        },
        1993: {
          'Cannes Film Festival': ["Palme d'OR", "FIPRESCI Awawrd for Best Film in Competition"],
          'Mainichi Film Concours': ['Best Foreign Language Film'],
          'Golden Globe Awards': ['Best Foreign Language Film'],
          'Chinese Performance Art Association': ['Special Award - Leslie Cheung']
        },
        1994: {
          'BAFTA': ['Best Film not in the English Language'],
          'Japanese Critics Society': ['Best Actor Award for Foreign Movie - Leslie Cheung']
        }
      }
    );
    moviesEnglish.addMovie(
      'Viva Erotica',
      'images/viva-erotica.jpg',
      1996,
      4,
      'Shu Qi debuts',
      ['Leslie Cheung', 'Karen Mok', 'Shu Qi'],
      {
        1997: {
          'Hong Kong Film Awards': ['Best Supporting Actress - Shu Qi', 'Best New Artist (Shu Qi)']
        }
      }
    );
    moviesEnglish.addMovie(
      'Rouge',
      'images/rouge.jpg',
      1988,
      5,
      'Chan Chen-Pang, better known as the "12th Young Master" (played by Leslie Cheung), was a fashionable playboy who frequented the opium dens prevalent in Hong Kong in 1934, where he met the high-class and much sought-after courtesan, Fleur (Anita Mui).',
      ['Leslie Cheung', 'Anita Mui'],
      {
        1988: {
          'Nantes Three Continents Festival': ['Golden Montgolfiere'],
          'Golden Horse Film Festival': ['Best Actress (Anita Mui)']
        },
        1989: {
          'Asia-Pacific Film Festival': ['Best Actress (Anita Mui)'],
          'Hong Kong Film Awards': ['Best Actress (Anita Mui)', 'Best Director (Stanley Kwan)', 'Best Film Editing', 'Best Original Film Score', 'Best Original Film Song ("Yin Ji Kau")', 'Best Picture']
        }
      }
    );

    $scope.currentBelt = moviesEnglish.collection[0];
    $scope.moviesEnglish = moviesEnglish;
    //$scope.currentBelt = 1; // this needs to be considered later with proper DB design

    $scope.beltSelectHandler = function(e) {
      console.log(e);
      // probably need a scope apply here
      $scope.currentBelt = e;
    };

  });
