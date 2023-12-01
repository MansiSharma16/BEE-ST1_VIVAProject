const express=require("express");
const app=express();
const db=require("./middlewire/db")
const router=require("./routes/router")

app.use(express.json());
db.dbConnect();
app.use("/api",router);
app.listen(3000,()=>{
    console.log("server on port 3000");
})