/**
* @author Valentin Agafonov <agafonov@sirena2000.ru>
* @name IE script
* @purpose fallbacks IE8+
*/

/*jslint browser: true, nomen: true */
/*global require, module, console, $, _, Promise*/

(function () {
    
    'use strict';

    window.$ = require('jquery');

    window.console = {
        log: function () {}
    };

}());