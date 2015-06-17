/**
* @author Valentin Agafonov <agafonov@sirena2000.ru>
* @name Ject
* @purpose new project template
*/

/*jslint browser: true, nomen: true */
/*global require, module, console, $, _, Promise*/

(function () {
    
    'use strict';
    
    var _ = require('underscore'),
        names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'],
        otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

    function findSuperman(values) {
        _.find(values, function (name) {
            if (name === 'Clark Kent') {
                console.log('It\'s Superman!');
            } else {
                console.log('... No superman!');
            }
        });
    }
    
    _.each([names, otherNames], function (nameGroup) {
        findSuperman(nameGroup);
    });

}());
