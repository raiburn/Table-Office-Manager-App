const auth = require('./Users/Auth');
const createuser = require('./Users/CreateUser');
const users = require('./Users/Users');
const finduser = require('./Users/FindUser');
const deleteuser = require('./Users/DeleteUser');
const alteruser = require('./Users/AlterUser');
const createseat = require('./Seats/CreateSeat');
const alterseat = require('./Seats/AlterSeat');
const deleteseat = require('./Seats/DeleteSeat');
const findseat = require('./Seats/FindSeat');
const seats = require('./Seats/Seats');
const reservations = require('./Reservations/Reservations');
const createreservations = require('./Reservations/CreateReservation');
const deletereservations = require('./Reservations/DeleteReservations');


module.exports = [auth, createuser, users, finduser, deleteuser, alteruser, createseat,
     alterseat, deleteseat, findseat, seats, reservations, createreservations, deletereservations];