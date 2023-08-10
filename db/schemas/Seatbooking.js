const mangoose = require("mongoose")
const { Schema } = mangoose;

const seatbookingSchema = new Schema({

  //   userName:String,
  audiName: {
    type: String,
    required: true
  },
  //   name:String,
  seat:
  {
    type: Array,
    required: true
  },
  date:{
    type: String,
    required: true
  },
  movieName:{
    type: String,
    required: true
  }
  

});

const SeatBooking = mangoose.model('SeatBooking', seatbookingSchema)

module.exports = SeatBooking;