const cityController = require("../controllers/cities.controller");

const express = require("express");
const router = express.Router();

router.post("/",cityController.post);
router.get("/",cityController.getCities);

module.exports = router;