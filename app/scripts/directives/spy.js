'use strict';

angular.module('leslieApp')
  .directive('spy', function () {
    return {
      restrict: 'A',
      require: '^scrollSpy',
      link: function(scope, elem, attrs, affix) {
        affix.addSpy({
          id: attrs.spy,
          in: function() {
            return elem.addClass('current');
          },
          out: function() {
            return elem.removeClass('current');
          }
        });
      }
    };
  });
