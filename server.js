require("dotenv").config();
require("./config/mongodb");
// require("./config/passport");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// const passport = require("passport");
const app = express();

// Importation of movies object
const MoviesModel = require("./models/Movies");
const movies = require("./bin/movies");

const TeachingsAdultsModel = require("./models/TeachingsAdults");
const teachingsAdults = require("./bin/teachingsAdults.js");
// config -----------------------

// cors options : allows your front to communicate through ajax with your backend
const corsOptions = {
  origin: [process.env.FRONT_URL],
  credentials: true, // required to let axios pass the cookie with any request
  optionsSuccessStatus: 200
};
// cors setup
app.use(cors(corsOptions));
// form data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// session init
app.use(
  session({
    saveUninitialized: false,
    resave: true,
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    secret: process.env.SESSION_SECRET
  })
);

// app.get("/", (req, res) => res.send("server ready"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

const indexRoute = require("./api/movies");

app.use("/", indexRoute.router);

// Create our Movies Model
console.log(movies);
// console.log("--------");
// pushSomeData = () => {
//   MoviesModel.insertMany(movies)
//     .then(dbRes => {
//       console.log(dbRes);
//       dbRes
//         .forEach((Movies, i) => console.log(Movies.title, i))
//         .catch(dbErr => {
//           console.log(dbErr);
//         });
//     })
//     .catch(dbErr => {
//       console.log(dbErr);
//     });
// };
// pushSomeData();

// pushTeachingsData = () => {
//   TeachingsAdultsModel.insertMany(teachingsAdults)
//     .then(dbRes => {
//       console.log(dbRes);
//       dbRes
//         .forEach((teachingsAdults, i) => console.log(teachingsAdults.text, i))
//         .catch(dbErr => {
//           console.log(dbErr);
//         });
//     })
//     .catch(dbErr => {
//       console.log(dbErr);
//     });
// };
// pushTeachingsData();

app.listen(process.env.PORT, () => {
  console.log("App hosted on: ", process.env.SITE_URL);
});
