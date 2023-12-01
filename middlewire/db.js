const mongoose=require("mongoose");
const config=require("config");
const uri=config.get("db_string");

exports.dbConnect=()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("database connected"))
    .catch(()=>console.log("Error"))
}