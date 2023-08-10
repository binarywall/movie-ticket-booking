const { getaudi,getaudidetailbyId } = require("../db/db")

const getAudidetail = (req, res, next) => {
  // const audi=req.body
  getaudi().then(data => {
    res.json({
      status: "Success",
      audidata: data,
      message: "All Audi Detial "
    })
  }).catch(err => next(new Error("getaudi function : ", err)))
}  

const getAudidetailbyId=(req,res,next)=>{
  // console.log(req.params.id)
  getaudidetailbyId(req.params.id).then(data=>{
    res.json({
      status: "Success",
      audidata: data,
      message: "All Audi Detial "
    })
  }).catch(err => next(new Error("getAudidetailbyId function : ", err)))
}

module.exports = {
    getAudidetail,
    getAudidetailbyId
}