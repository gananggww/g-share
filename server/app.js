const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
mongoose.connect('mongodb://localhost/g-share', (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database conected");
  }
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const userRouter = require("./router/userRouter")
app.use('/', userRouter)


app.listen(3000)
