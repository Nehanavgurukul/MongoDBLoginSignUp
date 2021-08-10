const Users = require("../controllers/findUsers.controller.js");


const express = require("express");
const router = express.Router();

router.get("/",Users.getUsers);

module.exports = router;
