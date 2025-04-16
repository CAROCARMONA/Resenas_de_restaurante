'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reseñaSchema = Schema({
    idUsuario: {type: Schema.Types.ObjectId,ref: 'usuarios' },
    nombreRestaurante: String,
    calificacion: Number,
    fechaVisita: String,
    observaciones: String
});

module.exports = mongoose.model('reseñas', reseñaSchema);
