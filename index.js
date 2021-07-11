const express = require("express");
const dotenv = require("dotenv");
// load config before use
dotenv.config({path : "./config/config.env"});

const app = express();
const connectDB = require("./config/db");
const colors = require('colors');
const trainings = require("./routes/trainings");
const errorHandler = require('./middleware/error');
const logger = require("./middleware/logger");


//Connect to database
connectDB();

//testing again
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

// Body parser
app.use(express.json());

// to use middleware
app.use(logger);

app.use("/api/v1/trainings",trainings);

app.use(errorHandler);
//PORT
const port = process.env.PORT || 5000;

//express listening
const server = app.listen(port,console.log("Listening".yellow.bold));

//Handle unhandled promise rejections

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}.red`);
    //close server and exit process
    server.close(() => process.exit(1));
})