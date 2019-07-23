const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  titleFr: String,
  titleOriginal: String,
  duration: String,
  synopsisFr: String,
  synopsisEn: String,
  poster: String,
  linkMovie: String,
  productor: String,
  trailer: String,
  released: String,
  average: String,
  age: String,
  actors: Array,
  type: Array,
  casting: Array,
  imageSlide: Array
});

const moviesModel = mongoose.model("Movies", moviesSchema);

module.exports = moviesModel;
