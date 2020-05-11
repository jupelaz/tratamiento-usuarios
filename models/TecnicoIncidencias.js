// TecnicoIncidencias.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnicoIncidenciaSchema = new Schema({
    fechaInicio: {type: Date,required: true},
    fechaFin: {type: Date,required: true},
    accionSobreCitas: {type: String,required: true},
    incidencia: {type: Schema.Types.ObjectId,required: true, ref: 'Incidencia'},
    tecnico: {type: Schema.Types.ObjectId,required: true, ref: 'Tecnico'},
    tecnicoSustituto: {type: Schema.Types.ObjectId, ref: 'TecnicoSustituto'},
});

const TecnicoIncidencia = mongoose.model('TecnicoIncidencia', tecnicoIncidenciaSchema);

module.exports = TecnicoIncidencia;