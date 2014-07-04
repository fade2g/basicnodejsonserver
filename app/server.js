/**
 * Created by holger on 04.07.2014.
 */
var http = require('http');
var express = require('express'); // install first
var path = require('path');
var controller = require('./controller/default');
var app = express();

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(function(req, res, next) {
    console.log('Again');
    next();
});

app.route('/waybills')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res, next) {
        res.send('hello world');
    });
app.route('/waybills/:id')
    .get(function(req, res, next) {
        console.log(req.params.id);
        controller.log('blah');
        controller.readFile(req, res, './assets/thing.json');
    });

http.createServer(app).listen(3000);

console.log('http server listening port %d\n', 3000);