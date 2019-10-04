const router = require("express").Router();
const Show = require("../db/models/Show");

router.get("/", (req, res) => {
  Show.find({}, "name id url summary").then(shows => {
    res.json(shows);
  });
});

router.get("/name/:name", (req, res) => {
  Show.findOne({ name: { $regex: new RegExp(req.params.name, "ig") } }).then(
    show => {
      res.json(show);
    }
  );
});

router.get("/:id", (req, res) => {
  Show.findById(req.params.id).then(show => {
    res.json(show);
  });
});

router.post("/", (req, res) => {
  Show.create(req.body).then(() => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  Show.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    () => {
      res.redirect("/");
    }
  );
});

router.delete("/:id", (req, res) => {
  Show.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
