/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.charts', [
    'BrainPal.pages.charts.amCharts',
    'BrainPal.pages.charts.chartJs',
    'BrainPal.pages.charts.chartist',
    'BrainPal.pages.charts.morris'
  ])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('charts', {
        url        : '/charts',
        abstract   : true,
        template   : '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
        title      : 'Charts',
        sidebarMeta: {
          icon : 'ion-stats-bars',
          order: 150,
        },
      });
  }

})();
