'use strict'

var validator = require('validator');
var Respuesta = require('../models/respuesta');



var controller = {
    test: (req, res) => {
        return res.status(200).send({
            message: 'probando test de controlador'
        });
    },

    crear: (req, res) => {
        //Recorrer los parametros por POST
        var params = req.body;
        console.log(params);
        // Validacion de los datos (validador)

        try {
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_documento = !validator.isEmpty(params.documento);
            var validate_email = !validator.isEmpty(params.email);


            console.log(validate_nombre, validate_documento, validate_email);

        } catch (error) {
            console.log(validate_nombre, validate_documento, validate_email);
            return res.status(200).send({
                status: "error",
                message: "faltan datos para enviar"
            });
        }

        if (validate_nombre && validate_documento) {
            var respuesta = new Respuesta();
            respuesta.id = res.contMes;
            respuesta.nombre = params.nombre;
            respuesta.documento = params.documento;
            respuesta.email = params.email;
            respuesta.respuesta1 = params.respuesta1;
            respuesta.respuesta2 = params.respuesta2;
            respuesta.respuesta3 = params.respuesta3;
            respuesta.respuesta4 = params.respuesta4;
            respuesta.respuesta5 = params.respuesta5;

            respuesta.save((error, contMes) => {
                if (error || !respuesta) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'el dato no se ha guardado'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    respuesta: contMes._id,

                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'los datos no son validos'
            });
        }
        console.log(respuesta);
    },

    getRespuestas: (req, res) => {
        var query = Respuesta.find({});
        query.sort('_id').exec((error, respuesta) => {
            if (error) {
                return res.status(500).send({
                    status: 'error',
                    message: 'no se devolvio datos'
                });
            }
            if (!respuesta) {
                return res.status(404).send({
                    status: 'error',
                    message: 'no hay respuestas para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                respuesta
            });
        });
    },

}



module.exports = controller;