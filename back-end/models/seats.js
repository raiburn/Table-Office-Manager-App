const {Schema, SchemaType, model} = require('mongoose');

const seatSchema = new Schema({
    number:{
        type: String,
        unique: true,
        trim: true
    },
    table:{
        type: String,
        unique: true,
        ref: 'Table',
    }
});

const Seats = model('Seats', seatSchema);
module.exports = Seats;