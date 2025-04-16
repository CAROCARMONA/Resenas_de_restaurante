'use strict';

var Reseña = require("../models/reseña");

function crearReseña(req, res) {
    var parametros = req.body;

    var nuevaReseña = new Reseña({
        idUsuario: parametros.idUsuario,
        nombreRestaurante: parametros.nombreRestaurante,
        calificacion: parametros.calificacion,
        fechaVisita: parametros.fechaVisita,
        observaciones: parametros.observaciones,
       // Asignar el ID del usuario actual
    });

    nuevaReseña.save().then(
        (reseñaGuardada) => {
            res.status(200).send({ reseñaCreada: reseñaGuardada });
        },
        err => {
            res.status(500).send({ message: "No se pudo crear la reseña. Intente nuevamente" });
        }
    );
}

function obtenerReseñas(req, res) {
    Reseña.find()
        .then(reseniasEncontradas => {
            res.status(200).send(reseniasEncontradas);
        })
        .catch(err => {
            res.status(500).send({ message: "Error al obtener las reseñas" });
        });
}

function obtenerReseñasPorUsuario(req, res) {
    const idUsuario = req.params.idUsuario;
  
    Reseña.find({ idUsuario: idUsuario })
      .then(reseniasEncontradas => {
        if (reseniasEncontradas.length === 0) {
          res.status(404).send({ message: "No se encontraron reseñas para el usuario especificado" });
        } else {
          res.status(200).send(reseniasEncontradas);
        }
      })
      .catch(err => {
        res.status(500).send({ message: "Error al obtener las reseñas del usuario" });
      });
  }

function actualizarReseña(req, res) {
    var reseñaId = req.params.id;
    var parametros = req.body;

    Reseña.findByIdAndUpdate(reseñaId, {
        nombreRestaurante: parametros.nombreRestaurante,
        calificacion: parametros.calificacion,
        fechaVisita: parametros.fechaVisita,
        observaciones: parametros.observaciones
    }, { new: true })
    .then(reseñaActualizada => {
        if (!reseñaActualizada) {
            return res.status(404).send({ message: "No se encontró la reseña" });
        }
        res.status(200).send({ reseñaActualizada });
    })
    .catch(err => {
        res.status(500).send({ message: "Error al actualizar la reseña" });
    });
}

function borrarReseña(req, res) {
    var reseñaId = req.params.id;

    Reseña.findByIdAndDelete(reseñaId)
    .then(reseñaEliminada => {
        if (!reseñaEliminada) {
            return res.status(404).send({ message: "No se encontró la reseña" });
        }
        res.status(200).send({ message: "Reseña eliminada correctamente" });
    })
    .catch(err => {
        res.status(500).send({ message: "Error al eliminar la reseña" });
    });
}

module.exports = {
    crearReseña,
    obtenerReseñas,
    actualizarReseña,
    borrarReseña,
    obtenerReseñasPorUsuario
}
