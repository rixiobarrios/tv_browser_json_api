const mongoose = require("../connection");

const ShowSchema = new mongoose.Schema({
  url: String,
  name: String,
  genres: String,
  language: String,
  runtime: Number,
  rating: { average: Number },
  weight: Number,
  gender: String,
  image: { medium: String, original: String },
  summary: String
});
const Show = mongoose.model("Show", ShowSchema);
module.exports = Show;
