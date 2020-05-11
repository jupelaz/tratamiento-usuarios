// UsuarioIncidencias.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioIncidenciaSchema = new Schema({
    fechaInicio: {type: Date,required: true},
    fechaFin: {type: Date,required: true},
    accionSobreCitas: {type: String,required: true},
    usuario: {type: Schema.Types.ObjectId,required: true, ref: 'Usuario'},
    incidencia: {type: Schema.Types.ObjectId,required: true, ref: 'Incidencia'},
});

const UsuarioIncidencia = mongoose.model('UsuarioIncidencia', usuarioIncidenciaSchema);

module.exports = UsuarioIncidencia;