const { Router } = require('express');
const alterSeat = Router();
const alterSeatController = require('../../controllers/Seats');

alterSeat.put('/seats/:id', alterSeatController.AlterSeat);

module.exports = alterSeat;