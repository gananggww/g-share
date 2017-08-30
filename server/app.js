const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const index = require('./router/index');
const userRouter = require('./router/userRouter')
const app = express()

app.use(cors())
// var url = "mongodb://anggraito:bnm@mydb-shard-00-00-vv98n.mongodb.net:27017,mydb-shard-00-01-vv98n.mongodb.net:27017,mydb-shard-00-02-vv98n.mongodb.net:27017/test?ssl=true&replicaSet=mydb-shard-0&authSource=admin"
// mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index)
app.use('/user', userRouter)

app.listen(3000, ()=>{
  console.log('You should listen 3000');
})
