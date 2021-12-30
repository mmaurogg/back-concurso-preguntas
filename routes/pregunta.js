var express = require('express');
var Controller = require('../controllers/pregunta');
var router = express.Router();


// Datos de prueba dentro del controlador
router.post('/testPregunta', Controller.test);

// ruta del metodo para crear
router.post('/crearPregunta', Controller.crear);
// ruta del metodo para obtener todos
router.get('/listaPreguntas', Controller.getPreguntas);

module.exports = router;