const shows = require("./shows.json");
const people = require("./people.json");
const Show = require("./models/Show");
const People = require("./models/Person");

People.remove({})
  .then(() => {
    return People.collection.insert(people);
  })
  .then(() => {
    process.exit();
  });

Show.remove({})
  .then(() => {
    return Show.collection.insert(shows);
  })
  .then(() => {
    process.exit();
  });
