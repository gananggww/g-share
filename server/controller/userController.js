const ObjectId = require("mongodb").ObjectId
const modelUser = require("../model/user")


const login = (req, res)=>{
 modelUser.find({_id :ObjectId(req.params.id)})
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
    nama : req.body.nama,
    email : req.body.email,
    telp : req.body.telp
  }).then(()=>{
    res.send("Berhasil menambahkan")
  })
  .catch(err=>{
    res.send("Gagal menambahkan")
  })
}

module.exports = {
  login,
  register
}
