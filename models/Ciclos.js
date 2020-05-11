// Ciclos.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cicloSchema = new Schema({
    descripcionEs: {type: String,required: true},
    descripcionEu: {type: String,required: true},
    tipoPeriodo: {type: Number,required: true},
    especialidad: {type: Schema.Types.ObjectId,required: true, ref: 'Especialidad'},
    empresa: {type: Schema.Types.ObjectId,required: true, ref: 'Empresa'},
    cicloEvento: {type: Schema.Types.ObjectId,required: true, ref: 'CicloEvento'},
});

const Ciclo = mongoose.model('Ciclo', cicloSchema);

module.exports = Ciclo;