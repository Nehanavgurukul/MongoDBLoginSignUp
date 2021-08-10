const signUser = require("../controllers/signup.controller");

const express = require("express");
const router = express.Router();

router.post("/", signUser.signup);


module.exports = router;
