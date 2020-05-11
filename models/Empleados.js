// Empleados.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    apellido1: {type: String,required: true},
    apellido2: {type: String,required: true},
    nombre: {type: String,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date},
});

const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;