const express =require('express');
const cors = require('cors')
const app =express();
const userRouter=require("./routes/user-routes")
const audiRouter=require("./routes/audi-routes")
const bookingRouter=require("./routes/booking-routes")
const movieRouter=require("./routes/allmovie-routes")


const {errorMiddlerware}=require("./middlerwares/middlerwares")

app.use(cors())
app.use(express.json())


app.use("/user",userRouter)
app.use("/audi",audiRouter)
app.use("/seatbooking",bookingRouter)
app.use("/allmovie",movieRouter)



app.use(errorMiddlerware);
module.exports=app;