'use strict'

var express = require('express');   
var bodyParser = require('body-parser'); 

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuracion de Cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.get('*', (req, res) => {
    res.status(200).send({message: "Bienvenido al servidor NodeJS"});
})

module.exports = app; 