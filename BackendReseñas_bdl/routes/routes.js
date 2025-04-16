'use strict'

var express = require('express');
var authController = require('../controllers/autenticacion');
var reseñaController=require('../controllers/reseñas');
var token = require('../helpers/autenticacion');
var routes = express.Router();

// Funciones para la gestión de reseñas
routes.post('/api/resena/crear', token.validarTokenUsuario, reseñaController.crearReseña);
routes.put('/api/resena/actualizar/:id', token.validarTokenUsuario, reseñaController.actualizarReseña);
routes.delete('/api/resena/borrar/:id', token.validarTokenUsuario, reseñaController.borrarReseña);
routes.get('/api/resena/obteneridUsuario/:idUsuario', token.validarTokenUsuario, reseñaController.obtenerReseñasPorUsuario);
routes.get('/api/resena/obtener', reseñaController.obtenerReseñas);

routes.post('/api/usuario/crear', authController.registrarUsuario);
routes.post('/api/usuario/iniciarsesion', authController.iniciarSesion);

module.exports = routes;
