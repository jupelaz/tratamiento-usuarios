// Incidencias.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incidenciaSchema = new Schema({
    descripcionEs: {type: String,required: true},
    descripcionEu: {type: String,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date,required: true},
    identificador: {type: String,required: true},
    estaJustificado: {type: String,required: true},
});

const Incidencia = mongoose.model('Incidencia', incidenciaSchema);

module.exports = Incidencia;