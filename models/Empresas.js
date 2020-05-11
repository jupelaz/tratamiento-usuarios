// Empresas.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empresaSchema = new Schema({
    nombre: {type: String,required: true},
    fechaAlta: {type: Date,required: true},
    fechaBaja: {type: Date},
    responsable: {type: Schema.Types.ObjectId,required: true, ref: 'Empleado'},
});

const Empresa = mongoose.model('Empresa', empresaSchema);

module.exports = Empresa;