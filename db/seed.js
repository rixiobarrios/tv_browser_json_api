const shows = require("./shows.json");
const people = require("./people.json");

const Show = require("./models/Show");
const Person = require("./models/Person");

Show.deleteMany({}).then(() => {
  Show.insertMany(shows).then(() => {
    Person.deleteMany({}).then(() => {
      Person.insertMany(people).then(() => process.exit());
    });
  });
});
