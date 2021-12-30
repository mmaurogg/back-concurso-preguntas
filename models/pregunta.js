'use strict'

// este es el modelo de la entrada de datos
var mongoose = require('mongoose');
var PreguntaSchema = mongoose.Schema;


var PreguntaSchema = mongoose.Schema({
    id: String,
    pregunta: String,
    respuestas: [{
            message: String,
            value: Number,
        },
        {
            message: String,
            value: Number,
        },
        {
            message: String,
            value: Number,
        },
        {
            message: String,
            value: Number,
        }
    ],
    dificultad: Number,

});

module.exports = mongoose.model('Pregunta', PreguntaSchema);