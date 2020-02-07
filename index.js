const express = require("express");
const app = express();
const showcontroller = require("./controllers/showcontroller");
const peoplecontroller = require("./controllers/peoplecontroller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/shows", showcontroller);
app.use("/api/people", peoplecontroller);
app.listen(8080, () => console.log("This shit is running on port... 8080"));
