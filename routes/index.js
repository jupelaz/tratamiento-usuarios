// index.js
const router = require('express').Router();
const path = require('path');
let listItem = [
    'agendas',
    'calendarios',
    'ciclos',
    'ciclosEvento',
    'empleados',
    'empresas',
    'especialidades',
    'incidencias',
    'tecnicoIncidencias',
    'tecnicos',
    'tiposEvento',
    'tratamientos',
    'usuarioIncidencias',
    'usuarios',
    'usuarioTratamientos'
];

listItem.forEach(element => {
    router.use(`/api/${element}`, require(`./${element}`));
});

//Si no se indica ninguna ruta de la API, lanza la app React
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
