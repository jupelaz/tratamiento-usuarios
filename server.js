// server.js
const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = process.env.PORT || 5000;

// require de la conexion a base de datos
require('./models');

// configurar el body-parser para las peticiones AJAX
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static('client/public'));
app.use(express.static(__dirname + '/client/build'));

// routas
app.use(routes);



// Arrancar el servidor
app.listen(PORT, () => {
	console.log(`Servidor a la escucha en puerto ${PORT}.`);
});