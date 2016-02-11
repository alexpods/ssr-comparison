'use strict';

var ng = require('angular2/core');

module.exports = ng
  .Component({
    selector: 'friend',
    properties: ['name', 'id'],
    template: '' +
      ' <li class="friend"> ' +
        ' {{ name }} (ID: {{ id }})' +
      ' </li> ',
    styles: [
      ' .friend { ' +
        ' padding: 5px; ' +
        ' margin: 5px; ' +
      ' } '
    ]
  })
  .Class({
    constructor: function() {
    }
  })