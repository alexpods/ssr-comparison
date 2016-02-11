'use strict';

var ng = require('angular2/core');

module.exports = ng
  .Component({
    selector: 'tag',
    properties: ['tag'],
    template: '<div class="tag">{{ tag }}</div>',
    styles: [' \
      .tag { \
        border: 1px solid #0074D9; \
        padding: 5px; \
        margin: 5px; \
        display: inline-block; \
      } \
    ']
  })
  .Class({
    constructor: function() {}
  })