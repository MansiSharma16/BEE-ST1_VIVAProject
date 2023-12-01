const model=require("../model/model")

const get=async(req,res)=>{
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

const create=async(req,res)=>{
    try{
        const input=req.body;
        await model.create(input)
        res.status(200).json({message:"user created"})
    }
    catch{
        res.status(500).json({message:"user not created"})
    }
}

 const getById=async(req,res)=>{
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

const update=async(req,res)=>{
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

const delete=async(req,res)=>{
    const id=req.params.id;
    try{
        await model.findByIdAndDelete(id)
        .then(()=>res.status(200).json({message:"deleted"}))
    }
    catch{
        res.status(500).json({message:"not deleted"})
    }
}

exports.get=get;
exports.create=create;
exports.getById=getById;
exports.update=update;
exports.delete=delete;








