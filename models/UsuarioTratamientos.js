// UsuarioTratamientos.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioTratamientoSchema = new Schema({
    
    diaSemana: {type: Number,required: true},
    fechaInicio: {type: Date,required: true},
    fechaFin: {type: Date,required: true},
    tipoPeriodo: {type: Number,required: true},
    numSesionesPeriodo: {type: Number,required: true},
    numSesionesMaximo: {type: Number,required: true},
    fechaAlta: {type: Date,required: true},
    fechaModificacion: {type: Date,required: true},
    fechaBaja: {type: Date,required: true},
    expediente: {type: String,required: true},
    secuencia: {type: Number,required: true},
    tipoProcesoExpediente: {type: Number,required: true},
    usuario: {type: Schema.Types.ObjectId,required: true, ref: 'Usuario'},
    tratamiento: {type: Schema.Types.ObjectId,required: true, ref: 'Tratamiento'},
    agendas: [{type: Schema.Types.ObjectId,required: true, ref: 'Agenda'}],
});

const UsuarioTratamiento = mongoose.model('UsuarioTratamiento', usuarioTratamientoSchema);

module.exports = UsuarioTratamiento;