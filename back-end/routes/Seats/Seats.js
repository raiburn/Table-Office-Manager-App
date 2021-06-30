const { Router } = require('express');
const seats = Router();
const seatsController = require('../../controllers/Seats');

seats.get('/seats', seatsController.SeatAll);

module.exports = seats;