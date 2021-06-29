const Reservation = require("../models/reservations");

// const AlterReservation = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const body = req.body;
//         const filter = {_id};
//         const data = {"Start": body.Start};
//         const update = {new: true};
//         const reservations = await Seat.findByIdAndUpdate(filter, data, update).exec();
//         return res.status(200).json({reservations});
//     } catch (error) {
//         console.log(error);
//     }
// }

const CreateReservation = async (req, res) => {
    try{
      const body = req.body;
      const reservation = await Reservation.create({Start:body.Start, Finish:body.Finish, users:body.user, seat:body.seat });
      return res.status(200).json({reservation});
    } catch(error){
        console.log(error);
    }
}

const DeleteReservation = async (req, res) => {
    try {
        const id = req.params.id;
        const reservations = await Reservation.remove({'_id':id}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

const FindReservation = async (req, res) => {
    try {
        const number = req.params.number;
        const reservations = await Reservation.findOne({'_id':number}).exec();
        return res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

const ReservationAll = async (req, res) => {
    try {
        const reservations = await Reservation.find({}).exec()
        res.status(200).json({reservations});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { CreateReservation, DeleteReservation, FindReservation, ReservationAll, }