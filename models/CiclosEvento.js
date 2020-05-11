// CiclosEvento.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cicloEventoSchema = new Schema({
    numSemana: {type: Number,required: true},
    diaSemana: {type: Number,required: true},
    horaDesde: {type: Date,required: true},
    ciclo: {type: Schema.Types.ObjectId,required: true, ref: 'Ciclo'},
    tipoEvento: {type: Schema.Types.ObjectId,required: true, ref: 'TipoEvento'},
});

const CicloEvento = mongoose.model('CicloEvento', cicloEventoSchema);

module.exports = CicloEvento;