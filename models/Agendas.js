// Agendas.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
	fecha: {type: Date,required: true},
	fechHoraDesde: {type: Date,required: true},
    fechHoraHasta: {type: Date,required: true},
    estadoRealizada: {type: String, required: true},
    observaciones: {type: String, required: true},
    tecnico: {type: Schema.Types.ObjectId, required: true, ref: 'Tecnico'},
    tipoEvento: {type: Schema.Types.ObjectId, required: true, ref: 'TipoEvento'},
    usuarioTratamiento: {type: Schema.Types.ObjectId, required: true, ref: 'Usuario'},
    incidencia: {type: Schema.Types.ObjectId, required: true, ref: 'Incidencia'},
    especialidad: {type: Schema.Types.ObjectId, required: true, ref: 'Especialidad'},
    empresa: {type: Schema.Types.ObjectId, required: true, ref: 'Empresa'},
});

const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;