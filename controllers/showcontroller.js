const express = require("express");
const router = express.Router();
const Show = require("../db/models/Show");

router.get("/", (req, res) => {
  Show.find({}).then(shows => {
    res.json(shows);
  });
});

router.get("/:id", (req, res) => {
  Show.find({ _id: req.params.id }).then(shows => {
    res.json(shows);
  });
});
// the same path caused the route to be confused by the controller with the previous route /:id
router.get("/name/:name", (req, res) => {
  console.log(req.params);
  Show.findOne({ name: req.params.name }).then(shows => {
    res.json(shows);
  });
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  Show.findByIdAndUpdate(req.params.id, req.body).then(() => {
    Show.find({}).then(shows => {
      res.json(shows);
    });
  });
});

router.post("/", (req, res) => {
  Show.create(req.body).then(() => {
    Show.find({}).then(shows => {
      res.json(shows);
    });
  });
});

router.delete("/:id", (req, res) => {
  Show.findOneAndRemove({ _id: req.params.id }).then(() => {
    Show.find({}).then(shows => {
      res.json(shows);
    });
  });
});

module.exports = router;
