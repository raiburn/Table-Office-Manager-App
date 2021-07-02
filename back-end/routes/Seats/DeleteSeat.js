const { Router } = require('express');
const deleteSeat = Router();
const deleteSeatController = require('../../controllers/Seats');

deleteSeat.delete('/seats/:id', deleteSeatController.DeleteSeat);

module.exports = deleteSeat;