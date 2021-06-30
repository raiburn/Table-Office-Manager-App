const {Schema, model} = require('mongoose');

const reservationSchema = new Schema({
    date: {
      type: Date,
      required: true
    },
    scheduledTimeStart: {
      type: String,
      required: true
    },
    scheduledTimeFinish: {
      type: String,
      required: true
    },  
    users:{
        //required:true,
        // type: Schema.ObjectId,
        // ref:'Users'
        type: String,
    },
    seat:{
        // //required:true,
        // type: Schema.ObjectId,
        // ref: 'Seats'
        type: String,
    },
    room:{
      //required:true,
      // type: Schema.ObjectId,
      // ref: 'Rooms'
      type: String,
  },
});

const Reservation = model('Reservation', reservationSchema);
module.exports = Reservation;