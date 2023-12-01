const express=require("express");
const router=express.Router();
const controller=require("../controller/controller");

router.get("/books",controller.get);
router.post("/books",controller.create);
router.get("/books/:id",controller.getById);
router.put("/books/:id",controller.update)
router.delete("/books/:id",controller.delete);

module.exports=router;
