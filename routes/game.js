'use strict';
var express = require('express');
var app = express.Router();

// URL THINGS...

app.get('/', function (req, res) {
    res.render('game', { title: 'Game' });
});

module.exports = app;