/**
 * @author Nati
 * created on 10.03.2017
 */

$(function () {
  'use strict';

  // Retrieve the CSRF token
  // (We are not using a callback as the ajax function takes care of everything)
  ajax(BACKEND_URL + '/User/Index', function(){}, 'get', '');
});