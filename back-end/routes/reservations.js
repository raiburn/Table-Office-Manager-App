const { createReservation } = require('../controllers/Reservations.js');

module.exports = (app, nextMain) => {
  app.post('/reservations', createReservation);
  nextMain();
}
