const { getallmovie} = require("../db/db")


const getAllMovie=(req,res,next)=>{
  getallmovie().then(data=>{
    res.json({
      status: "Success",
      audidata: data,
      message: "All Audi Detial "
    })
  }).catch(err => next(new Error("getallmovie function : ", err)))
}

module.exports = {
    getAllMovie
}