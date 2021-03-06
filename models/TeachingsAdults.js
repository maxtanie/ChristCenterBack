const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const TeachingsAdults = new Schema({
//   title: String,
//   image: {
//     type: String
//   },
//   text: String
// });

// const TeachingsAdults = new Schema({
//   titleTeachings: String,
//   sliderCitation: [
//     {
//       citations: [{ type: String }],
//       verses: [{ type: String }]
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
//   ],
//   conclusion: String
// });

const TeachingsAdults = new Schema({
  titleTeachings: String,
  sliderCitation: [
    {
      citations: [{ type: String }],
      verses: [{ type: String }]
    }
  ],
  titleArticle: String,
  imageArticle: String,
  articlePartOneTitle: String,
  articlePartOneSubTitle: String,
  articlePartOnetextArticle: String,
  articlePartOneLinkWebPage: String,
  articlePartTwoTitle: String,
  articlePartTwoSubTitle: String,
  articlePartTwotextArticle: String,
  articlePartTwoLinkWebPage: String,
  conclusion: String
});

const teachingsAdultsModel = mongoose.model("TeachingAdults", TeachingsAdults);

module.exports = teachingsAdultsModel;
