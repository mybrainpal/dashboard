'use strict';

/**
 * Responsible for executing an AJAX request.
 * If the returned data is in JSON format, the function automatically decodes it.
 *
 * @param url {string} The URL destination.
 * @param callback {function} A callback called when the server responds.
 * @param type {string} The request type (GET, POST). Defaults to 'GET'.
 * @param query {string} Additional HTTP parameters. Defaults to an empty string.
 * @return mixed In case of a sucessful request (200 OK),
 *         the function will call the parameter callback
 *         using the parsed response data.
 *         In case the data has been JSON encoded, the function will decode it.
 */
function ajax(url, callback, type, query) {
  // Trim everything!
  url  = url.trim();
  type = type.trim();

  // Make sure the data always has a 'submit' value appended to it
  if (query.indexOf('submit=') == -1) {
    // It doesn't, append the parameter
    query += '&submit=1';
  }
  // Make sure the JSON parameter is in the data
  if (query.indexOf('json=') == -1) {
    // It doesn't, append the parameter
    query += '&json=1';
  }
  // Make sure we are sending the CSRF token as well
  if (query.indexOf('token=') == -1 && csrf_token) {
    // It doesn't, append the parameter
    query += '&token=' + csrf_token;
  }

  // Send the AJAX request
  $.ajax({
           type: type,
           url : url,
           data: query,
           crossOrigin: true,
           xhrFields: {
             withCredentials: true
           }
         }).done(function (data, textStatus, request) { // Success

    // Check if we should redirect
    if (data['redirect']) {
      redirect(data['redirect']);
    }

    // Store the new CSRF token
    var csrf_token = data['csrf_token'];

    // Call the requested callback
    callback(data, textStatus, request)
  }).fail(function (xhr, textStatus, error) { // Failure
    // Notify the developer his AJAX request failed. Dumb, dumb, developer.
    console.log('AJAX request to "' + url + '" failed, with error message "' + error);
  }).always(function () { // Always being called no matter the result
  });
}

/**
 * Responsible for redirecting the browser to a different URL.
 *
 * @param url The URL destination.
 */
function redirect(url) {
  // Make sure the URL always starts with an 'http' prefix
  if (url.indexOf('http') != 0) {
    // It doesn't, add our web root url to it
    url = web_root + url;
  }

  // Perform the redirect
  window.location.replace(url);
}