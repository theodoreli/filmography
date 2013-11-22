'use strict';

//based off http://alxhill.com/blog/articles/angular-scrollspy/
// need to contact him regarding my changes. then try uploading my own
angular.module('leslieApp')
  .directive('scrollSpy', ['$window', function ($window) {
    return {
      restrict: 'A',
      controller: function($scope) {
        $scope.spies = [];
        this.addSpy = function(spyObj) {
          return $scope.spies.push(spyObj);
        };
      },
      link: function(scope, elem, attrs) {
        var spyElems = {};
        scope.$watch('scope.spies', function() {
          var spy, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = scope.spies.length; _i < _len; _i++) {
            spy = scope.spies[_i];
            if (!spyElems[spy.id]) {
              var toFind = $.find('#' + spy.id)[0];
              var $toFind = $(toFind);
              spyElems[spy.id] = $toFind; // find returns aray
            }
          }
        });

        $($window).scroll(function() {
          var highlightSpy, pos, spy, _i, _len, _ref;

          highlightSpy = null;
          _ref = scope.spies;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            spy = _ref[_i];
            spy.out();

            if ((pos = (spyElems[spy.id]).offset().top) - $window.scrollY <= 0) {
              spy.pos = pos;
              if (highlightSpy === null) {
                highlightSpy = spy;
              }
              if (highlightSpy.pos < spy.pos) {
                highlightSpy = spy;
              }
            }
          }

          highlightSpy !== null ? highlightSpy['in']() : void 0;
        });
      }
    };
  }]);
