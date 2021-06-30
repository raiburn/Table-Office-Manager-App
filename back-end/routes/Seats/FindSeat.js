const { Router } = require('express');
const findSeat = Router();
const findSeatController = require('../../controllers/Seats');

findSeat.get('/seats/:number', findSeatController.FindSeat);

module.exports = findSeat;