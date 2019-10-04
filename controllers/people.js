const router = require("express").Router();
const Person = require("../db/models/Person");

router.get("/", (req, res) => {
  Person.find({}, "name id url").then(people => {
    res.json(people);
  });
});

router.get("/:id", (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person);
  });
});

router.get("/name/:name", (req, res) => {
  Person.findOne({ name: { $regex: new RegExp(req.params.name, "ig") } }).then(
    person => {
      res.json(person);
    }
  );
});

router.post("/", (req, res) => {
  Person.create(req.body).then(() => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    () => {
      res.redirect("/");
    }
  );
});

router.delete("/:id", (req, res) => {
  Person.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
