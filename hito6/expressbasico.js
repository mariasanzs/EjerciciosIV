#!/usr/bin/env node

var express=require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hola, este es el ejercicio 2 en el que uso Express');
});

app.get('/about', function (req, res) {
    res.send('Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.')
});

//EXPRESIÓN REGULAR
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
});

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');


module.exports = app;
