const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeachingsAdults = new Schema({
  title: String,
  image: {
    type: String
  },
  text: String
});

// const TeachingAdults = new Schema({
//   titleTeachings: String,
//   sliderCitation: [
//     {
//       citations: Array,
//       verses: String
//     }
//   ],
//   titleArticle: String,
//   imageArticle: String,
//   articlePartOne: [
//     {
//       title: String,
//       subTitle: String,
//       textArticle: String,
//       linkWebPage: String
//     }
//   ],

//   articlePartTwo: [
//     {
//       title: String,
//       subTitle: String,
//       textArticle: String,
//       linkWebPage: String
//     }
//   ]
// });

const teachingsAdultsModel = mongoose.model("TeachingAdults", TeachingsAdults);

module.exports = teachingsAdultsModel;
