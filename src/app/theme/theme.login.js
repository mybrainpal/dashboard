/**
 * @author Nati
 * created on 10.03.2017
 */

'use strict';

/**
 * Called when the login button is pressed.
 * Checks if the user has entered the correct credentials - if he is,
 * he loads the main dash board, otherwise it shows an error.
 */
function login() {
  // Sets the AJAX callback
  var ajax_callback = function(data) {
    // Successful login!
    if( data['success'] ) {
      // @TODO add dashboard loading mechanism (maybe a redirect?)
      redirect('/dashboard');
    } else {
      // Login failed! display the error
      $('#labelUserLoginError').text(data['error_msg']);

      // Display the error DIV
      $('#DivUserLoginError').show(1);
    }
  }

  // Sends a login request to the server
  ajax(BACKEND_URL + '/User/Login', ajax_callback, 'post', $( '#divUserLoginForm' ).serialize());

  // Prevent the browser from reloading the page
  return false;
}
