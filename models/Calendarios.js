// Calendarios.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarioSchema = new Schema({
    fecha: {type: Date,required: true},
    especialidad: {type: Schema.Types.ObjectId, ref: 'Especialidad'},
    empresa: {type: Schema.Types.ObjectId, required: true, ref: 'Empresa'},
});

const Calendario = mongoose.model('Calendario', calendarioSchema);

module.exports = Calendario;