// Especialidades.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const especialidadSchema = new Schema({
    descripcionEs: {type: String,required: true},
    descripcionEu: {type: String,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date,required: true},
});

const Especialidad = mongoose.model('Especialidad', especialidadSchema);

module.exports = Especialidad;