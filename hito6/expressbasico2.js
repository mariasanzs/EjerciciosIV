var express = require('express');
var app = express();
var nombre = 'María'
var port = process.env.PORT || 5000

var tiposproductos = new Array;

app.put('/tipoProducto/:tipo',  function(req, res) {
    var tipoProducto = req.params.tipo
    tiposproductos.push(String(tipoProducto))
    res.send('añadido el tipo de producto' + tipoProducto);
});

app.get('/', function (req, res) {
    res.send('Hola ' + nombre + ', este es el ejercicio 2 en el que uso Express');
});

app.get('/tiposproductos', function (req, res) {
    res.send(tiposproductos);
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
