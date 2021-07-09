const express = require("express");
const {getTrainings, createTraining, getTraining, updateTrainings, updateTraining, deleteTraining} = require("../controllers/trainings")
const router = express.Router();

// routes(basic) with help of Router without controllers
/*router.get("/",(req,res) =>{
    res.status(200).json({success : true, msg : "show all trainings"})
})

router.get("/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `show particular trainings with id ${req.params.id}`})
})

router.post("/",(req,res) =>{
    res.status(200).json({success : true, msg : "new training created"})
})

router.put("/",(req,res) =>{
    res.status(200).json({success : true, msg : "update all trainings"})
})

router.put("/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `update particular trainings with id ${req.params.id}`})
})

router.delete("/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `delete particular trainings with id ${req.params.id}`})
})*/

// routes(basic) with help of Router with controllers

router.route("/")
.get(getTrainings)
.post(createTraining)
.put(updateTrainings)

router.route("/:id")
.get(getTraining)
.put(updateTraining)
.delete(deleteTraining)

module.exports = router;