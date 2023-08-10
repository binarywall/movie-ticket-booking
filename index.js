
const app=require("./app")
// data base connection
const MONGODB_PASSWORD= "uVs3GuSOh0kzqgCP"
const database_name="test"
const connect =require("./db/mongoose.js")



const URL=`mongodb+srv://admin:${MONGODB_PASSWORD}@cluster0.niesizq.mongodb.net/${database_name}?retryWrites=true&w=majority`

const port=5050

connect(URL).then(data=>{
    app.listen(port,()=>{
        console.log(`Database Connected ,Server Running On Port : `,port)
    })
}).catch(err=>{
    console.log("Error Connecting to database",err)
})
