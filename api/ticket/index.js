'use strict';

const express = require('express'),
			controller = require('./ticket.controller'),
			router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:ticket_id', controller.show);
router.put('/:ticket_id', controller.update);
router.delete('/:ticket_id', controller.delete);

module.exports = router;
