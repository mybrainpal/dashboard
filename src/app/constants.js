'use strict';

/* CONSTANTS */
const BACKEND_URL   = 'https://dashboard-161017.appspot.com';
const FRONTEND_PATH = 'frontend';

/* GLOBALS */
var web_root = window.location['protocol'] + '//'
               + window.location['host'] + '/'; // The web root of the system
var system_root   = web_root; // The links web root (web_root + index.php)
var frontend_root = web_root + FRONTEND_PATH; // The front end web root
var csrf_token        = null;