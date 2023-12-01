const model=require("../model/model")

const getUser=async(req,res)=>{
    let user;
    try{
        user=await model.find();
    }
    catch{
        console.log("error");
    }
    if(!user){
        res.status(404).json({user})
    }
    res.status(200).json({user});
}

const createUSer=async(req,res)=>{
    try{
        const input=req.body;
        await model.create(input)
        res.status(200).json({message:"user created"})
    }
    catch{
        res.status(500).json({message:"user not created"})
    }
}

 const getUSerById=async(req,res)=>{
    let user;
    const id=req.params.id;
    try{
        user=await model.findById(id)
    }catch{
        console.log("error")
    }
    if(!user){
        res.status(404).json({user})
    }
    res.status(200).json({user})
}

const updateuser=async(req,res)=>{
    let user;
    const id=req.params.id;
    const {title,author,genre,publicationYear,ISBN}=req.body;
    try{
        user=await model.findByIdAndUpdate(id,{
            title,author,genre,publicationYear,ISBN
        })
        user=await user.save().then(()=>res.json({message:"updated"}))
    }catch{
        res.status(500).json({message:"not updated"})
    }
}

const deleteuser=async(req,res)=>{
    const id=req.params.id;
    try{
        await model.findByIdAndDelete(id)
        .then(()=>res.status(200).json({message:"deleted"}))
    }
    catch{
        res.status(500).json({message:"not deleted"})
    }
}

exports.getUser=getUser;
exports.createUSer=createUSer;
exports.getUSerById=getUSerById;
exports.updateuser=updateuser;
exports.deleteuser=deleteuser;








