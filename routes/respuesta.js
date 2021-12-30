var express = require('express');
var Controller = require('../controllers/respuesta');
var router = express.Router();


// Datos de prueba dentro del controlador
router.post('/testRespuesta', Controller.test);

// ruta del metodo para crear
router.post('/crearRespuesta', Controller.crear);
// ruta del metodo para obtener todos
router.get('/listaRespuestas', Controller.getRespuestas);


module.exports = router;