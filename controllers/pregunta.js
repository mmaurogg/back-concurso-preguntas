'use strict'

var validator = require('validator');
var Pregunta = require('../models/pregunta');


var controller = {
    test: (req, res) => {
        return res.status(200).send({
            message: 'probando test de controlador de pregunta'
        });
    },

    crear: (req, res) => {
        //Recorrer los parametros por POST
        var params = req.body;
        console.log(params);
        // Validacion de los datos (validador)

        try {
            var validate_id = params._id;
            var validate_pregunta = !validator.isEmpty(params.pregunta);
            console.log(validate_id, validate_pregunta);

        } catch (error) {
            console.log(validate_pregunta);
            return res.status(200).send({
                status: "error",
                message: "faltan datos para enviar"
            });
        }

        if (validate_pregunta) {
            var pregunta = new Pregunta();
            pregunta.id = res.contMes;
            pregunta.pregunta = params.pregunta;
            pregunta.respuestas = params.respuestas;
            pregunta.dificultad = params.dificultad;

            pregunta.save((error, contMes) => {
                if (error || !pregunta) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'el dato no se ha guardado'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    pregunta: contMes._id,

                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'los datos no son validos'
            });
        }
        console.log(pregunta);
    },

    getPreguntas: (req, res) => {
        var query = Pregunta.find({});

        query.sort('_id').exec((error, preguntas) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: 'no se devolvio datos'
                });
            }
            if (!preguntas) {
                return res.status(404).send({
                    status: 'error',
                    message: 'no hay contactos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                preguntas
            });
        });
    },

}

module.exports = controller;