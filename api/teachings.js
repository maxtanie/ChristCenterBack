const express = require("express");
const router = new express.Router();
const TeachingsAdults = require("../models/TeachingsAdults");

const create = data => TeachingsAdults.create(data);
const getTeaching = () => TeachingsAdults.find();

router.get("/teachings/adults", (req, res) => {
  console.log("ici all teachings adults");
  getTeaching()
    .then(teachingsAdults => {
      res.status(200).send(teachingsAdults);
    })
    .catch(error => res.status(500).send("Something went wrong", error));
});

router.post("/teachings/adults", (req, res) => {
  console.log("ici all teachings adults transformed");
  const { title, text, image } = req.body;
  const newTeachingsAdults = {
    title,
    text,
    image
  };

  create(newTeachingsAdults)
    .then(dbRes => {
      res.status(200).json(dbRes);
      // res.redirect("/teachings/adults")

      console.log("POPOPOPOPO");
    })
    .catch(dbErr => {
      res.send(dbErr);
      console.log("TOUT VA MAL");
    });
});

router.get("/add-teachings-adults/:id", (req, res) => {
  TeachingsAdults.findById(req.params.id)
    .then(addTeachingsAd => {
      res.send(addTeachingsAd);
      res.redirect("/teachings");
      console.log(req, "TEACHINGS ADULTS EDIT");
    })
    .catch(err => {
      console.log("error");
      res.redirect("/");
      // res.redirect("/manage-teachings-adults");
    });
});

router.patch("/teachings/:id", (req, res) => {
  TeachingsAdults.findByIdAndUpdate(req.params.id, req.body)
    .then(addTeachingsAd => {
      res.send(addTeachingsAd);
      console.log(req, "TEACHINGS ADULTS EDIT UPDATE");
    })
    .catch(err => {
      console.log("error POST TEACHING ADD");
      res.status(500).send("Something went wrong with the DB");
    });
});

router.delete("/teachings/:id", (req, res) => {
  console.log(req.params.id);
  TeachingsAdults.findByIdAndRemove(req.params.id, function(err, teachingAdd) {
    if (err) res.json(err);
    else res.json("Succes remoded");
  });
});

module.exports = {
  router,
  getTeaching,
  create
};
