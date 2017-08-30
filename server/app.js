const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const index = require('./router/index');
const userRouter = require('./router/userRouter')
const app = express()

app.use(cors())
mongoose.connect('mongodb://localhost/g-share', (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("database conected");
  }
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index)
app.use('/user', userRouter)

app.listen(3000, ()=>{
  console.log('You should listen 3000');
})
