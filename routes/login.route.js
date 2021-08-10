const loginUser = require("../controllers/login.controller");


const express = require("express");
const router = express.Router();

router.get("/",loginUser.login);

module.exports = router;

