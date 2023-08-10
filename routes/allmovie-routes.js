const express = require("express")
const router = express.Router();
const { getAllMovie } = require("../controllers/movie-controllers")


router.get("/", getAllMovie)


module.exports = router