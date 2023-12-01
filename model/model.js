const mongoose=require("mongoose");

const user=new mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    publicationYear:Number,
    ISBN:String
})

module.exports=mongoose.model("user",user);