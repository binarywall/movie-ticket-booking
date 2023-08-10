const express = require("express")
const router = express.Router();
const { getAudidetail ,getAudidetailbyId} = require("../controllers/audi-controllers")


router.get("/", getAudidetail)
router.get("/:id", getAudidetailbyId)


module.exports = router