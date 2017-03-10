/**
 * @author ohad
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BrainPal.theme')
         .service('baUtil', baUtil);

  /** @ngInject */
  function baUtil() {

    this.isDescendant = function (parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    this.hexToRGB = function (hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16);
      var g = parseInt(hex.slice(3, 5), 16);
      var b = parseInt(hex.slice(5, 7), 16);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    };

    this.hasAttr = function (elem, attrName) {
      var attr = $(elem).attr(attrName);
      return (typeof attr !== typeof undefined && attr !== false);
    };

    this.abbr = function (num, decPlaces) {
      decPlaces = $.isNumeric(decPlaces) ? decPlaces : 1;
      decPlaces = Math.pow(10, decPlaces);

      // Enumerate number abbreviations
      var abbrev = ["k", "m", "b", "t"];

      // Go through the array backwards, so we do the largest first
      for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= num) {
          // Here, we multiply by decPlaces, round, and then divide by decPlaces.
          // This gives us nice rounding to a particular decimal place.
          num = Math.round(num * decPlaces / size) / decPlaces;

          // Handle special case where we round up to the next abbreviation
          if ((num == 1000) && (i < abbrev.length - 1)) {
            num = 1;
            i++;
          }

          // Add the letter for the abbreviation
          return num.toString() + abbrev[i];
        }
      }

      return num;
    };

    this.loadGauge = function (id, customOptions) {
      var options = {
        id             : id,
        value          : 40,
        min            : 0,
        max            : 50,
        decimals       : 0,
        gaugeWidthScale: 0.6,
        pointer        : true,
        pointerOptions : {
          toplength   : 10,
          bottomlength: 10,
          bottomwidth : 2
        },
        valueFontFamily: 'Roboto',
        valueFontColor : '#666',
        symbol         : '%',
        minTxt         : ' ',
        maxTxt         : ' ',
        levelColors    : ["#FF9E01",
                          "#F8FF01",
                          "#04D215"]
      };
      return new JustGage($.extend(options, customOptions));
    };

    this.onEnterViewport = function (elem, handler, alreadyInViewportHandler) {
      if ((!elem.getBoundingClientRect() || !window.innerHeight) ||
          ((elem.getBoundingClientRect().top +
            elem.getBoundingClientRect().bottom) / 2 < window.innerHeight)) {
        if (alreadyInViewportHandler) {
          alreadyInViewportHandler();
        } else {
          handler();
        }
      } else {
        var wrapper = function () {
          if ((elem.getBoundingClientRect().top +
               elem.getBoundingClientRect().bottom) / 2 < window.innerHeight) {
            handler();
            window.removeEventListener('scroll', wrapper);
          }
        };
        window.addEventListener('scroll', wrapper);
      }
    }
  }
})();
