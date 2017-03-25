'use strict';

const express = require('express'),
			controller = require('./ticket.controller'),
			passport = require('passport'),
			jwt = require('jsonwebtoken'),
			router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), controller.index);
router.post('/', passport.authenticate('jwt', { session: false }), controller.create);
router.get('/:ticket_id', passport.authenticate('jwt', { session: false }), controller.show);
router.put('/:ticket_id', passport.authenticate('jwt', { session: false }), controller.update);
router.delete('/:ticket_id', passport.authenticate('jwt', { session: false }), controller.delete);

module.exports = router;
