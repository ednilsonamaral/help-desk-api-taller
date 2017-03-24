'use strict';

const Ticket = require('./ticket.model');
const time = require('time');

const d = new time.Date();
d.setTimezone('America/Sao_Paulo');
d.toString();

	// Get all tickets
exports.index = function (req, res) {
		Ticket.find(function (err, t) {
		if (err)
			res.json({
			  statusCode: 200,
			  data: err,
			  error: true,
			  status: 'NOK'
			});

		res.json({
			statusCode: 200,
			data: t,
			error: false,
			status: 'OK'
		});
	});
};

	// Get a single ticket by id
exports.show = function (req, res) {
			Ticket.findById(req.params.ticket_id, function (err, t) {
		if (err)
			res.json({
			  statusCode: 200,
			  data: err,
			  error: true,
			  status: 'NOK'
			});

		res.json({
			statusCode: 200,
			data: t,
			error: false,
			status: 'OK'
		});
	});
};

	// Create a new ticket
exports.create = function (req, res) {
	const t = new Ticket();

	t.codigo = req.body.codigo;
	t.categoria = req.body.categoria;
	t.produto = req.body.produto;
	t.abertura = new Date();
	t.fechamento = req.body.fechamento;
	t.mensagem = req.body.mensagem;
	t.arquivo = req.body.arquivo;
	t.atendimento = req.body.atendimento;
	t.status = req.body.status;
	t.created = d;
	t.updated = '';

	t.save(function (err) {
		if (err)
			res.json({
			  statusCode: 200,
			  data: err,
			  error: true,
			  status: 'NOK'
			});

		res.json({
			statusCode: 200,
			description: 'Novo ticket cadastrado com sucesso!',
			data: t,
			error: false,
			status: 'OK'
		});
	});
};

	// Update a single ticket
exports.update = function (req, res) {
	const t = new Ticket();

	Ticket.findById(req.params.ticket_id, function (err, t) {
		if (err)
			res.json({
			  statusCode: 200,
			  data: err,
			  error: true,
			  status: 'NOK'
			});

			t.codigo = req.body.codigo;
			t.categoria = req.body.categoria;
			t.produto = req.body.produto;
			t.fechamento = req.body.fechamento;
			t.mensagem = req.body.mensagem;
			t.arquivo = req.body.arquivo;
			t.atendimento = req.body.atendimento;
			t.status = req.body.status;
			t.updated = d;

		t.save(function (err) {
			if (err)
				res.json({
				  statusCode: 200,
				  data: err,
				  error: true,
				  status: 'NOK'
				});

			res.json({
				statusCode: 200,
				description: 'Ticket atualizado com sucesso!',
				data: t,
				error: false,
				status: 'OK'
			});
		});
	});
};

	// Delete a single ticket
exports.delete = function (req, res) {
		Ticket.remove({
			_id: req.params.ticket_id
	}, function (err, t) {
		if (err)
			res.json({
				statusCode: 200,
				data: err,
				error: true,
				status: 'NOK'
			});

		res.json({
			statusCode: 200,
			description: 'Ticket deletado com sucesso! bye bye ;)',
			data: t,
			error: false,
			status: 'OK'
		});
	});
};