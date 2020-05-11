// Tratamientos.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tratamientoSchema = new Schema({
    descripcionEs: {type: String,required: true},
    descripcionEu: {type: String,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date,required: true},
    especialidad: {type: Schema.Types.ObjectId, ref: 'Especialidad'},
});

const Tratamiento = mongoose.model('Tratamiento', tratamientoSchema);

module.exports = Tratamiento;