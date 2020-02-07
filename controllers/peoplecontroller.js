const express = require("express");
const router = express.Router();
const Person = require("../db/models/Person");

router.get("/", (req, res) => {
  Person.find({}).then(people => {
    res.json(people);
  });
});

router.get("/:id", (req, res) => {
  Person.find({ _id: req.params.id }).then(people => {
    res.json(people);
  });
});
// the same path caused the route to be confused by the controller with the previous route /:id
router.get("/name/:name", (req, res) => {
  console.log(req.params);
  Person.findOne({ name: req.params.name }).then(people => {
    res.json(people);
  });
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  Person.findByIdAndUpdate(req.params.id, req.body).then(() => {
    Person.find({}).then(people => {
      res.json(people);
    });
  });
});

router.post("/", (req, res) => {
  Person.create(req.body).then(() => {
    Person.find({}).then(people => {
      res.json(people);
    });
  });
});

router.delete("/:id", (req, res) => {
  Person.findOneAndRemove({ _id: req.params.id }).then(() => {
    Person.find({}).then(people => {
      res.json(people);
    });
  });
});

module.exports = router;
