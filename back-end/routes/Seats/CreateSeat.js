const { Router } = require('express');
const createSeat = Router();
const createSeatController = require('../../controllers/Seats');

createSeat.post('/seats', createSeatController.CreateSeat);

module.exports = createSeat;