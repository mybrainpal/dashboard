/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.ui', [
    'BrainPal.pages.ui.typography',
    'BrainPal.pages.ui.buttons',
    'BrainPal.pages.ui.icons',
    'BrainPal.pages.ui.modals',
    'BrainPal.pages.ui.grid',
    'BrainPal.pages.ui.alerts',
    'BrainPal.pages.ui.progressBars',
    'BrainPal.pages.ui.notifications',
    'BrainPal.pages.ui.tabs',
    'BrainPal.pages.ui.slider',
    'BrainPal.pages.ui.panels',
  ])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('ui', {
        url        : '/ui',
        template   : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        abstract   : true,
        title      : 'UI Features',
        sidebarMeta: {
          icon : 'ion-android-laptop',
          order: 200,
        },
      });
  }

})();
