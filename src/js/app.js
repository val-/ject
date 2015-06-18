/**
* @author Valentin Agafonov <agafonov@sirena2000.ru>
* @name Ject
* @purpose new project template
*/

/*jslint browser: true, nomen: true */
/*global require, module, console, $, _, Promise*/

window._ = require('underscore');
if (!window.$) {
    window.$ = require('zepto-browserify').$;
}

(function (window) {
    
    'use strict';
            
    $(function () {

        $("#newJectPlaceholder button").text("Get started");

    });

}(window));

