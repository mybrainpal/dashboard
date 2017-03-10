/**
 * @author ohad
 * created on 15.12.2015
 */

/* GLOBALS */
var web_root = window.location['protocol'] + '//' + window.location['host'] + '/'; // The web
                                                                                   // root of
                                                                                   // the
                                                                                   // system
var system_root   = web_root; // The links web root (web_root + index.php)
var frontend_root = web_root + FRONTEND_PATH; // The front end web root
csrf_token        = null;

(function () {
  'use strict';

  /* CONSTANTS */
  const SYSTEM_PATH   = '/';
  const FRONTEND_PATH = 'frontend';
  const IMAGES_ROOT   = 'assets/img/';

  angular.module('BrainPal.theme')
         .constant('layoutSizes', {
           resWidthCollapseSidebar: 1200,
           resWidthHideSidebar    : 500
         })
         .constant('layoutPaths', {
           images: {
             root       : IMAGES_ROOT,
             profile    : IMAGES_ROOT + 'app/profile/',
             experiments: IMAGES_ROOT + 'app/experiments/',
             amMap      : 'assets/img/theme/vendor/ammap//dist/ammap/images/',
             amChart    : 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
           }
         })
         .constant('colorHelper', {
           tint : function (color, weight) {
             return mix('#ffffff', color, weight);
           },
           shade: function (color, weight) {
             return mix('#000000', color, weight);
           },
         });

  function shade(color, weight) {
    return mix('#000000', color, weight);
  }

  function tint(color, weight) {
    return mix('#ffffff', color, weight);
  }

  //SASS mix function
  function mix(color1, color2, weight) {
    // convert a decimal value to hex
    function d2h(d) {
      return d.toString(16);
    }

    // convert a hex value to decimal
    function h2d(h) {
      return parseInt(h, 16);
    }

    var result = "#";
    for (var i = 1; i < 7; i += 2) {
      var color1Part = h2d(color1.substr(i, 2));
      var color2Part = h2d(color2.substr(i, 2));
      var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  }
})();
