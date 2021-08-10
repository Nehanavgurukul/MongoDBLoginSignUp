const express = require("express");
const router = express.Router();


const signUserRoute = require("./signUp.route");
const loginUserRoute = require("./login.route");
const allUsersRoute = require("./users.route");
const citiesRoute = require("./cities.route")


router.use("/signup", signUserRoute);
router.use("/login", loginUserRoute);
router.use("/users", allUsersRoute);
router.use("/city", citiesRoute);

module.exports = router;


