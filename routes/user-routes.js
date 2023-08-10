const express=require("express")
const router = express.Router();
const {signup,login,userBooking,getMovieByuser}=require("../controllers/user-controllers")
const {encryptPassword}=require("../middlerwares/middlerwares")

router.post("/signup",encryptPassword,signup)
router.post("/login",login)
router.post("/bookings/",userBooking)
router.get("/bookings/:id",getMovieByuser)

module.exports=router