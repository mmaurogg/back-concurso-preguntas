// Carga de modulos en node para crear servidor
var express = require('express');

// Ejecutar express (http)
var app = express();

var cors = require('cors');

app.use(cors());

// Cargar ficheros turas
const pregunta = require('./routes/pregunta');
const respuesta = require('./routes/respuesta');

// Carga de modulos en Middleware
app.use(express.urlencoded());
app.use(express.json());

// Añadir prefijos a rutas / cargar rutas
app.use('/api', pregunta);
app.use('/api', respuesta);

// Exportar modulos (fichero actual)
module.exports = app;