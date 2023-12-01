const express=require("express");
const router=express.Router();
const controller=require("../controller/controller");

router.get("/books",controller.getUser);
router.post("/books",controller.createUSer);
router.get("/books/:id",controller.getUSerById);
router.put("/books/:id",controller.updateuser)
router.delete("/books/:id",controller.deleteuser);

module.exports=router;