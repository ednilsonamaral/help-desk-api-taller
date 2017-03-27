'use strict';

const User = require('../user/user.model');
const time = require('time');
const jwt = require('jsonwebtoken');
const secret = 'beDragons';

const d = new time.Date();
d.setTimezone('America/Sao_Paulo');
d.toString();

// Create a new ticket
exports.auth = function (req, res) {
	User.findOne({
		email: req.body.email
	}, function (err, user) {
		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Usuário não encontrado!' });
		} else {
			user.comparePassword(req.body.password, function (err, isMatch) {
				if (isMatch && !err) {
					const token = jwt.sign(user, secret, {
						expiresIn: 28800 // seconds - 8 horas
					});

					res.json({ success: true, token: token });
				} else {
					res.json({ success: false, message: 'Senha incorreta!' });
				}
			});
		}
	});
};
