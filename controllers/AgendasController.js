// AgendasControllers.js
const Item = require('../models/Agendas');

// Definimos todos los metodos y logica para las rutas
const routes = {
	findAll: function(req, res) {
		Item.find(req.query)
			.then(i => res.json(i))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Item.findById(req.params.id)
			.then(i => res.json(i))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Item.create(req.body)
			.then(i => res.json(i))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Item.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(i => res.json(i))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Item.findById({ _id: req.params.id })
			.then(i => i.remove())
			.then(i => res.json(i))
			.catch(err => res.status(422).json(err));
	}
};

module.exports = routes;
