const { Router } = require('express');
const alterSeat = Router();
const alterSeatController = require('../../controllers/seats');

alterSeat.put('/seats/:id', alterSeatController.AlterSeat);

module.exports = alterSeat;