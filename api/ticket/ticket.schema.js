'use strict';

const mongoose = require('mongoose');

const _schema = {
	codigo: { type: Number },
	categoria: { type: String, required: true },
	produto: { type: String, required: true },
	abertura: { type: Date, default: Date.now },
	fechamento: { type: Date, default: Date.now },
	mensagem: { type: String },
	arquivo: { type: String },
	atendimento: { type: String },
	status: { type: String, required: true },
	created: { type: String },
	updated: { type: String }
};

const TicketSchema = new mongoose.Schema(_schema);

module.exports = TicketSchema;
