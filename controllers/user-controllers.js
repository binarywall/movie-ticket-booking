const { createUser,getUserByUsername,createuserbooking ,getMoviebyuserId} = require("../db/db")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const JWTKEY="binary";

//singin functiion
const signup = (req, res, next) => {
    const user = req.body;
  console.log(req.body)
     createUser(user).then(result => {
        res.json({
            status: "Success",
            messag: "User Created",
            data:result
        })
    }).catch(err => {
        next(new Error("User Already exixt"))
    })
}

const login=(req,res,next)=>{
  // console.log(req.body.userName);
    getUserByUsername(req.body.userName).then(user => {
        if (user) {
            console.log(user)
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (!result) {
                    next(new Error("Please enter correct username or password"))
                } else {
                    const token = jwt.sign({ username: req.body.username }, JWTKEY);
                    res.json({
                        status: "Success",
                        token: token,
                        data:user,
                        message: "User Logged In"
                    })
                }
            });
        } else {
            next("User Not found");
        }
    })

}

const userBooking=(req,res,next)=>{
  console.log(req.body.bookingdetail)
  createuserbooking(req.body.bookingdetail).then(data=>{
    res.json({
      status:"Success",
      data:data,
      message:"user Booking Update"
    })
  }).catch(err=>next(new Error("user Booking function :",err)))
}
const getMovieByuser=(req,res,next)=>{
  // console.log(req)
  const id= req.params.id
  getMoviebyuserId(id).then(data=>{
     res.json({
      status:"Success",
      data:data,
      message:"All Booking of User"
    })
  }).catch(err=>next(new Error("user Booking function :",err)))
}

module.exports = {
    signup,
    login,
    userBooking,
    getMovieByuser
}