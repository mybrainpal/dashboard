/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BrainPal.pages.components', [
    'BrainPal.pages.components.mail',
    'BrainPal.pages.components.timeline',
    'BrainPal.pages.components.tree',
  ])
         .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('components', {
        url        : '/components',
        template   : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        abstract   : true,
        title      : 'Components',
        sidebarMeta: {
          icon : 'ion-gear-a',
          order: 100,
        },
      });
  }

})();
