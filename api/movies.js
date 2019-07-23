const express = require("express");
const router = new express.Router();
const Movies = require("../models/Movies");
const TeachingsAdults = require("../models/TeachingsAdults");

const getAll = () => Movies.find();
const getMovies = () => Movies.find();
const create = data => TeachingsAdults.create(data);
const getTeaching = () => TeachingsAdults.find();

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

// router.post("/", (req, res) => {
//   console.log("ici c'est LA HOME");
//   const { title, text } = req.body;
//   const newTeachingsAdults = {
//     title,
//     text
//   };
//   create(newTeachingsAdults)
//     .then(dbRes => {
//       res.status(200).json(dbRes);

//       console.log("TOUT VA BIEN");
//     })
//     .catch(dbErr => {
//       res.send(dbErr);
//       console.log("TOUT VA MAL");
//     });
// });

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

/*
------------------------------------------------------------------------
ROUTE FOR TEACHINGS ADULTS
------------------------------------------------------------------------
*/
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

// router.post("/teachings/adults", (req, res) => {
//   TeachingsAdults.findById(req.params.id)
//     .then(teaching => {
//       console.log("passé par la teaching adulte route");
//       console.log("PARAMS", req.params.id);
//     })
//     .catch(err => {
//       console.log("error teachings");
//     });
// });

/*
------------------------------------------------------------------------
ROUTE FOR ADD TEACHING ADULTS FORM
------------------------------------------------------------------------
*/
// router.get("/add-teachings-adults", (req, res) => {
//   console.log("ici c'est add teaching adults");
//   getTeaching()
//     .then(addTeachingAdults => {
//       res.status(200).send(addTeachingAdults);
//     })
//     .catch(err => {
//       res.status(500).send("Bad ERROR", error);
//     });
// });

// router.post("/add-teachings-adults", (req, res) => {
//   // const { title, text, image } = req.body;
//   // const newTeachingsAdults = {
//   //   title,
//   //   text,
//   //   image
//   // };
//   // create(newTeachingsAdults)
//   //   .then(dbRes => {
//   //     res.status(200).json(dbRes);
//   //     console.log("TOUT VA BIEN");
//   //   })
//   //   .catch(dbErr => {
//   //     res.send(dbErr);
//   //     console.log("TOUT VA MAL");
//   //   });
// })

// router.get("/add-teachings-adults/:id", (req, res) => {
//   TeachingsAdults.findByd(req.params.id)
//     .then(addTeachingsAd => {
//       // res.send(addTeachingsAd);

//       console.log(req, "TEACHINGS ADULTS EDIT");
//     })
//     .catch(err => {
//       console.log("error");
//       // res.redirect("/manage-teachings-adults");
//     });
// });

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
  getAll,
  getTeaching,
  create
};
