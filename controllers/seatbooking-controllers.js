const {seatbooking,getbookedSeat} = require("../db/db")

const seatBooking=(req,res,next)=>{
  // console.log(req.body.seat)
  seatbooking(req.body.seat).then(data=>{
    res.json({
      status:"Success",
      data:data,
      message:"seat Booking Update"
    })
  }).catch(err=>next(new Error("seat Booking function :",err)))
}

const getBookedSeat=(req,res,next)=>{
  // console.log(req.params)
  getbookedSeat(req.params.audiName,req.params.date).then(data=>{
    res.json({
      status:"Success",
      data:data,
      message:"All Booking at Date"
    })
  }).catch(err=>next(new Error("seat Booking function :",err)))
}

module.exports = {
   seatBooking,
  getBookedSeat
}