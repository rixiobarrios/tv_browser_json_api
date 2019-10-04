const express = require("express");
const peopleController = require("./controllers/people");
const showsController = require("./controllers/shows");
const parser = require("body-parser");

const app = express();

app.use(parser.json());
app.use("/api/shows", showsController);
app.use("/api/people", peopleController);

app.listen(3000, () => {
  console.log("running on localhost:3000!");
});
