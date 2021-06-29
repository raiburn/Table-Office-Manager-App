const Seat = require("../models/seats");

const AlterSeat = async (req, res) => {
    try {
        const _id = req.params.id;
        const body = req.body;
        const filter = {_id};
        const data = {"number": body.number};
        const update = {new: true};
        const seats = await Seat.findByIdAndUpdate(filter, data, update).exec();
        return res.status(200).json({seats});
    } catch (error) {
        console.log(error);
    }
}

const CreateSeat = async (req, res) => {
    try{
      console.log("onichan");
      const body = req.body;
      const seats = await Seat.create({number: body.number});
      return res.status(200).json({seats});
    } catch(error){
        console.log(error);
    }
}

const DeleteSeat = async (req, res) => {
    try {
        const id = req.params.id;
        const seats = await Seat.remove({'_id':id}).exec();
        return res.status(200).json({seats});
    } catch (error) {
        console.log(error);
    }
}

const FindSeat = async (req, res) => {
    try {
        const number = req.params.number;
        const seats = await Seat.findOne({'number':number}).exec();
        return res.status(200).json({seats});
    } catch (error) {
        console.log(error);
    }
}

const SeatAll = async (req, res) => {
    try {
        const seats = await Seat.find({}).exec()
        res.status(200).json({seats});
    } catch (error) {
        console.log(error);
    }
}

const SeatSearcher = async (req, res) => {
    try {
        const number = req.params.number;
        const seats = await Seat.find({'number':{$regex:'.*' + number + '.*' }});
        return res.status(200).json({seats});
    }catch(error){
        console.log(error)
    }
}

module.exports = {AlterSeat, CreateSeat, DeleteSeat, FindSeat, SeatAll, SeatSearcher }