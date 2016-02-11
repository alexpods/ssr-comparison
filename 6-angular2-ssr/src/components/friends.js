'use strict';

var ng = require('angular2/core');
var NgFor = require('angular2/common').NgFor;
var Friend = require('./friend');

module.exports = ng
  .Component({
    selector: 'friends',
    properties: ['friends'],
    directives: [Friend],
    template: ' \
      <div class="friends"> \
        <p>Friends List:</p> \
        <ul> \
          <template ngFor #friend [ngForOf]="friends"> \
            <friend \
              [id]="friend.id" \
              [name]="friend.name" \
            ></friend> \
          </template> \
        </ul> \
      </div> \
    ',
    styles: [' \
      .friends { \
        border: 1px solid #2ECC40; \
        padding: 5px; \
        margin: 5px; \
      } \
    ']
  })
  .Class({
    constructor: function() {}
  })