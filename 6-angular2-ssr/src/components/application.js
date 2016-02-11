'use strict';

var ng = require('angular2/core');
var NgFor = require('angular2/common').NgFor;
var User = require('./user');
var data = require('../lib/json-generator.json');

module.exports = ng
  .Component({
    selector: 'app',
    directives: [User, NgFor],
    template: '' +
      '<div>' +
        ' <template ngFor #userData [ngForOf]="userDatas"> ' +
          ' <user ' +
            ' [_id]="userData._id" ' +
            ' [name]="userData.name" ' +
            ' [age]="userData.age" ' +
            ' [phone]="userData.phone" ' +
            ' [picture]="userData.picture" ' +
            ' [balance]="userData.balance" ' +
            ' [tags]="userData.tags" ' +
            ' [friends]="userData.friends" ' +
          ' ></user> ' +
        ' </template> ' +
      '</div>'
  })
  .Class({
    constructor: [function() {
      this.userDatas = data;
    }]
  });