// TiposEvento.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoEventoSchema = new Schema({
    descripcionEs: {type: String,required: true},
    descripcionEu: {type: String,required: true},
    subtipo: {type: String,required: true},
    duracion: {type: Number,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date,required: true},
    especialidad: {type: Schema.Types.ObjectId, ref: 'Especialidad'},
});

const TipoEvento = mongoose.model('TipoEvento', tipoEventoSchema);

module.exports = TipoEvento;