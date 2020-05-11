// Tecnicos.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnicoSchema = new Schema({
    dedicacion: {type: String,required: true},
    horario: {type: String,required: true},
    nombre: {type: String,required: true},
    fechaInicio: {type: Date,required: true},
    fechaFin: {type: Date,required: true},
    empleado: {type: Schema.Types.ObjectId,required: true, ref: 'Empleado'},
    empresa: {type: Schema.Types.ObjectId,required: true, ref: 'Empresa'},
    especialidad: {type: Schema.Types.ObjectId,required: true, ref: 'Especialidad'},
});

const Tecnico = mongoose.model('Tecnico', tecnicoSchema);

module.exports = Tecnico;