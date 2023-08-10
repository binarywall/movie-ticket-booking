const mangoose = require("mongoose")
const { Schema } = mangoose;

const userbookingSchema = new Schema({

  //   userName:String,
  username: {
    type: String,
    required: true
  },
  //   name:String,
  seat:
  {
    type: Array,
    required: true
  },
  audiName: {
    type: String,
    required: true
  },
  movieName:{
    type: String,
    required: true
  },
  date:{
    type: String,
    required: true
  }

});

const UserBooking = mangoose.model('UserBooking', userbookingSchema)

module.exports = UserBooking;