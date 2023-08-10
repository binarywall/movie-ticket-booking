const express=require("express")
const router = express.Router();
const {seatBooking,getBookedSeat}=require("../controllers/seatbooking-controllers.js")



router.post("/add",seatBooking)
router.get("/get/:audiName/:date",getBookedSeat)

module.exports=router