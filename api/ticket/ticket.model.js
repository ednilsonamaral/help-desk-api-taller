'use strict';

const mongoose = require('mongoose'),
			TicketSchema = require('./ticket.schema'),
			_m = require('../../config/model');

const model = _m('Ticket', TicketSchema);

module.exports = model;
