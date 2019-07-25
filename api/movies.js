const express = require("express");
const router = new express.Router();
const Movies = require("../models/Movies");

const getAll = () => Movies.find();

/*
------------------------------------------------------------------------
ROUTE FOR MOVIES
------------------------------------------------------------------------
*/
router.get("/", (req, res) => {
  console.log("ici all movies");
  getAll()
    .then(movies => {
      res.status(200).send(movies);
    })
    .catch(error => res.status(500).send("Something went wrong", error));
});

// ROUTE FOR THE SEE MORE MOVIES
router.get("/movies/see-more/:id", (req, res) => {
  Movies.findById(req.params.id)
    .then(movie => {
      console.log("passé par la");
      console.log("PARAMS", req.params.id);
      res.send(movie);
    })
    .catch(err => {
      console.log("error movies");
    });
});

module.exports = {
  router,
  getAll
};
