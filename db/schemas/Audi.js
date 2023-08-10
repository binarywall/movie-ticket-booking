const mangoose = require("mongoose")
const { Schema } = mangoose;

const audiSchema = new Schema({

  //   userName:String,
  audiName: {
    unique: true,
    type: String,
    required: true
  },
  //   name:String,
  movieName:
  {
    type: String,
    required: true
  },
  showTime: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }

});

const Audi = mangoose.model('Audi', audiSchema)

module.exports = Audi;