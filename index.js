const express = require("express");
const dotenv = require("dotenv");
const app = express();
const trainings = require("./routes/trainings")
const logger = require("./middleware/logger");

// load config before use
dotenv.config({path : "./config/config.env"});

//testing
console.log(process.env.PORT)

//Basic Routes 
/*app.get("/api/v1/trainings",(req,res) =>{
    res.status(200).json({success : true, msg : "show all trainings"})
})

app.get("/api/v1/trainings/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `show particular trainings with id ${req.params.id}`})
})

app.post("/api/v1/trainings",(req,res) =>{
    res.status(200).json({success : true, msg : "new training created"})
})

app.put("/api/v1/trainings",(req,res) =>{
    res.status(200).json({success : true, msg : "update all trainings"})
})

app.put("/api/v1/trainings/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `update particular trainings with id ${req.params.id}`})
})

app.delete("/api/v1/trainings/:id",(req,res) =>{
    res.status(200).json({success : true, msg : `delete particular trainings with id ${req.params.id}`})
})
*/


// to use middleware
app.use(logger);

app.use("/api/v1/trainings",trainings)
//PORT
const port = process.env.PORT || 5000;

//express listening
app.listen(port,console.log("Listening"))