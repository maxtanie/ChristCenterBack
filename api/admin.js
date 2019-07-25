const express = require("express");
const router = new express.Router();
const Admin = require("../models/Admin.js");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/", (req, res) => {
  console.log("ROUTE HOME ADMIN");
  res.send({ type: "GET" });
});

// router.post("/login", (req, res) => {
//   console.log("ROUTE LOGIN");
//   res.send({ type: "POST" });
// });

router.get("/index", (req, res) => {
  console.log("ROUTE ADMIN PAGE GET");
  res.send({ type: "GET" });
});

router.post("/index", (req, res) => {
  console.log("ROUTE ADMIN PAGE POST");
  res.send({ type: "POST" });
});

// router.get("/admin/login", (req, res, next) => {
//   console.log("HHHHHHHHH");
//   const username = req.body.username;
//   const password = req.body.password;
//   if (username === "" || password === "") {
//     res.send("Please enter both, mail and password to sign up.");
//     return;
//   }
//   Admin.findOne({ username: username })
//     .then(admin => {
//       console.log("HHHHHHHHH");
//       if (!admin) {
//         res.send("The username doesn't exist.");

//         return;
//       }
//       if (bcrypt.compareSync(password, admin.password)) {
//         console.log(admin.password);
//         console.log(req.session.currentUser);
//         // Save the login in the session!
//         req.session.currentUser = admin;
//       } else {
//         res.send("incorrect password");
//       }
//     })
//     .catch(error => {
//       next(error);
//     });
// });

router.post("/login", (req, res, next) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.send("Please enter both, mail and password to sign up.");
    return;
  }
  Admin.findOne({ username: username })
    .then(admin => {
      if (!admin) {
        res.send("The username doesn't exist.");

        return;
      }
      console.log(admin);
      console.log("LOGIIIIINNNNN");
      console.log(admin.username);

      if (password === admin.password) {
        console.log(admin.password);
        // Save the login in the session!
        req.session.currentUser = admin;
        console.log(req.session.currentUser);
        res.send(req.session.currentUser);
      } else {
        res.send("incorrect password");
      }
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
