'use strict';

require('reflect-metadata');

var path = require('path');
var express = require('express');
var ng2engine = require('angular2-express-engine').ng2engine;
var App = require('./src/components/application');
var ng = require('angular2/core');

ng.enableProdMode();

var app = express();

app.engine('html', ng2engine);

app.set('views', path.resolve(__dirname, 'src'));
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index', { App: App, providers: [] });
});

app.listen(3000, function() {
  console.log('Running angular2 ssr at http://localhost:3000/');
});
