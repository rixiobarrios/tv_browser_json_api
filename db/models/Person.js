const mongoose = require("../connection");

const PersonSchema = mongoose.Schema({
  url: String,
  name: String,
  country: {
    name: String,
    code: String,
    timezone: String
  },
  birthday: Date,
  deathday: Date,
  gender: String,
  image: {
    medium: String,
    original: String
  }
});

const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
