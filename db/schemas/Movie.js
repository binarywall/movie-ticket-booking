const mangoose = require("mongoose")
const { Schema } = mangoose;

const movieSchema = new Schema({

  //   name:String,
  Title:
  {
    type: String,
    required: true
  },
  Runtime: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }

});

const Movie = mangoose.model('Movie', movieSchema)

module.exports = Movie;