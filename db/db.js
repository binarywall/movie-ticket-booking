const User=require("./schemas/User")
const Audi=require("./schemas/Audi")
const Movie=require("./schemas/Movie")
const UserBooking=require("./schemas/UserBooking")
const SeatBooking=require("./schemas/Seatbooking")


//create user
const createUser=(userData)=>{
    
    return new Promise((res,rej)=>{
        User.findOne({email:userData.email}).then(data=>{
            if(data){
                rej("User Alreday Created...")
            }else{
                const user = new User(userData)
                res(user.save())
            }
        }).catch(err=>{
            rej(err);
        })
        
    })
}
//Get user by User Name
const getUserByUsername=(username)=>{
  // console.log(username)
  return  User.findOne({email:username})
}

// Audi  Logics
const getaudi=()=>{
  return Audi.find()
}

const getaudidetailbyId=(data)=>{
  return Audi.findOne({_id:data})
}

//User Booking Logics
const createuserbooking=(userdata)=>{
  console.log(userdata)
  return new Promise((res,rej)=>{
    if(userdata){
      const userBooking=new UserBooking(userdata)
      res(userBooking.save())
    }else{
      rej("createuserbooking data not found")
    }
  })
}

// seat booking
const seatbooking = (userdata)=>{
  return new Promise((res,rej)=>{
    if(userdata){
      const seatBooking=new SeatBooking(userdata)
      res(seatBooking.save())
    }else{
      rej("Seat Booking is not updated")
    }
  })
}

const getallmovie=()=>{
  return Movie.find()
}
const getMoviebyuserId=(id)=>{
  return UserBooking.find({username:id})
}

const getbookedSeat=(audiName,date)=>{
  console.log(audiName,date)
  return SeatBooking.find({audiName:audiName,date:date})
}

module.exports={
  createUser,
  getUserByUsername,
  getaudi,getaudidetailbyId,
  createuserbooking,
  seatbooking,
  getallmovie,
  getMoviebyuserId,
  getbookedSeat
}