const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeachingsAdults = new Schema({
  title: String,
  image: {
    type: String
  },
  text: String
});

const teachingsAdultsModel = mongoose.model("TeachingAdults", TeachingsAdults);

module.exports = teachingsAdultsModel;
