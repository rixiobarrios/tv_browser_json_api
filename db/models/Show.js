const mongoose = require("../connection");

const ShowSchema = mongoose.Schema({
  url: String,
  name: String,
  language: String,
  genres: [String],
  status: String,
  runtime: Number,
  rating: {
    average: Number
  },
  weight: Number,
  image: {
    medium: String,
    original: String
  },
  summary: String
});

const Show = mongoose.model("show", ShowSchema);

module.exports = Show;
