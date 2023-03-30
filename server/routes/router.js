const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");
const moment = require("moment")

//image stotage confige
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});

const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }
    else{
        callback(null,Error("only image is allowed"));
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

//register userdata
router.post("/register",upload.single("photo"),(req,res)=>{
// console.log(req.body)
// const {fname} = req.body;
// const {filename} = req.file;
// const  {price} = req.price;
// const {description} = req.description;
const {fname, description, price} = req.body;
const {filename} = req.file;

console.log("data");
if(!fname || !filename || !price || !description){
    res.status(422).json({status:422,message:"fil all the details"});
}
    try{
// let date = moment(new Date()).format("YYYY-MM-DD")
conn.query("INSERT INTO productlist (fname, description, price, photo) VALUES ($1, $2, $3, $4)", [fname, description, price, filename], (err,result) => {
    if(err){
        console.log(err);
    }else{
        console.log("data added");
        res.status(201).json({status:201,data:req.body})
    }
})
    }catch(error){
        res.status(422).json({status:422,error});
    }
})

//get user data
router.get("/getdata",(req,res)=>{
    try{
conn.query("SELECT * FROM productlist",(err,result)=>{
    if(err){
        console.log("error");
    }else{
        console.log("data get");
        res.status(201).json({status:201,data:result})
        // console.log(data)
        // console.log(result)
    }
});
    }catch(error){
        res.status(422).json({status:422,error})
    }
})
module.exports = router;