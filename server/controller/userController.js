const ObjectId = require("mongodb").ObjectId
const modelUser = require("../model/user")


const getAll = (req, res)=>{
 modelUser.find()
 .then(rows=>{
   res.send(rows)
 })
 .catch(err=>{
   res.send(err)
 })
}

const register = (req, res)=>{
  modelUser.create({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
  }).then(()=>{
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    res.send(err)
  })
}

const login = (req, res)=>{
  modelUser.create({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email
  }).then(()=>{
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  login,
  register,
  getAll
}
