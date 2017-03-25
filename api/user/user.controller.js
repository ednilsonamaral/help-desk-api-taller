'use strict';

const User = require('./user.model');
const time = require('time');

const d = new time.Date();
d.setTimezone('America/Sao_Paulo');
d.toString();

// Get all users
exports.index = function (req, res) {
	User.find(function (err, u) {
		if (err) {
			res.json({
				statusCode: 200,
				data: err,
				error: true,
				status: 'NOK'
			});
		}

		res.json({
			statusCode: 200,
			data: u,
			error: false,
			status: 'OK'
		});
	});
};

// Create a new user
exports.create = function (req, res) {
	if (!req.body.email || !req.body.password) {
		res.json({ success: false, message: 'Por favor, digite o e-mail e senha para logar no sistema!' });
	} else {
		const newUser = new User();

		newUser.nome = req.body.nome;
		newUser.email = req.body.email;
		newUser.password = req.body.password;
		newUser.created = d;

		newUser.save(function (err) {
			if (err) {
				return res.json({
					statusCode: 200,
					data: err,
					error: true,
					status: 'NOK'
				});
			}

			res.json({
				statusCode: 200,
				description: 'Novo usuário cadastrado com sucesso!',
				error: false,
				status: 'OK'
			});
		});
	}
};

// Get a single user
exports.show = function (req, res) {
	User.findById(req.params.user_id, function (err, u) {
		if (err) {
			return res.json({
				statusCode: 200,
				data: err,
				error: true,
				status: 'NOK'
			});
		}

		res.json({
			statusCode: 200,
			data: u,
			error: false,
			status: 'OK'
		});
	});
};

// Update a single user
exports.update = function (req, res) {
	const u = new User();

	User.findById(req.params.user_id, function (err, u) {
		if (err)
			res.json({
			  statusCode: 200,
			  data: err,
			  error: true,
			  status: 'NOK'
			});

			u.nome = req.body.nome;
			u.email = req.body.email;
			u.password = req.body.password;
			u.updated = d;

		u.save(function (err) {
			if (err)
				res.json({
				  statusCode: 200,
				  data: err,
				  error: true,
				  status: 'NOK'
				});

			res.json({
				statusCode: 200,
				description: 'Usuário atualizado com sucesso!',
				data: u,
				error: false,
				status: 'OK'
			});
		});
	});
};

// Delete a single user
exports.delete = function (req, res) {
	User.remove({
		_id: req.params.user_id
	}, function (err, u) {
		if (err)
			res.json({
				statusCode: 200,
				data: err,
				error: true,
				status: 'NOK'
			});

		res.json({
			statusCode: 200,
			description: 'Usuário deletado com sucesso! bye bye ;)',
			data: u,
			error: false,
			status: 'OK'
		});
	});
};
