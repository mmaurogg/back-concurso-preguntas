'use strict'

// este es el modelo de la entrada de datos
var mongoose = require('mongoose');
var RespuestaSchema = mongoose.Schema;


var RespuestaSchema = mongoose.Schema({
    id: String,
    nombre: String,
    documento: String,
    email: String,
    respuesta1: Array,
    respuesta2: Array,
    respuesta3: Array,
    respuesta4: Array,
    respuesta5: Array,
    fecha: Date,

    score: Number,

});

module.exports = mongoose.model('Respuesta', RespuestaSchema);