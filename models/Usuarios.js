// Usuarios.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    apellido1: {type: String,required: true},
    apellido2: {type: String,required: true},
    nombre: {type: String,required: true},
    fechaInicio: {type: Date,required: true},
    fechaFin: {type: Date,required: true},
    expediente: {type: String,required: true},
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;