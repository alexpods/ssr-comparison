'use strict';

var ng = require('angular2/core');
var NgFor = require('angular2/common').NgFor;
var Tag = require('./tag');
var Friends = require('./friends');

module.exports = ng
  .Component({
    selector: 'user',
    properties: [
      '_id', 'name', 'age', 'phone', 'picture', 'balance', 'tags', 'friends'
    ],
    directives: [NgFor, Tag, Friends],
    template: '' +
      '<div class="user" [ngClass]=" \'user-\' + _id ">' +
        ' <img [src]="picture" /> ' +
        ' <p>Name: {{ name }}</p> ' +
        ' <p>Age: {{ age }}</p> ' +
        ' <p>Phone: {{ phone }}</p>' +
        ' <p>Net Worth: {{ balance }}</p> ' +
        ' <template ngFor #tag [ngForOf]="tags"> ' +
          '<tag [tag]="tag"></tag> ' +
        ' </template> ' +
        ' <friends [friends]="friends"></friends> ' +
      '</div>',
    styles: [
      ' .user { ' +
        ' border: 1px solid #eee; ' +
        ' padding: 5px; ' +
        ' margin:  5px; ' +
        ' width: 300px; ' +
        ' display: inline-block; ' +
      ' } '
    ]
  })
  .Class({
    constructor: function() {}
  })