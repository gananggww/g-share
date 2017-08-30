const dotenv = require('dotenv').config();
const dbmodel = require('..models/index');

var findAll = (req, res)=>{
  dbmodel.find()
  .then((files)=>{
    res.send(files)
  })
  .catch(error =>{
    res.send(error)
  })
}

var uploadFile = (req, res)=>{
  dbmodel.create({
    example : req.body.example,
    example : req.body.example
  })
  .then(()=>{
    res.send("Upload Access")
  })
  .catch(error =>{
    res.send(error)
  })
}

var findFile = (req, res)=>{
  dbmodel.findById({_id:req.params.id})
  .then((file)=>{
    res.send(file)
  })
  .catch(error =>{
    console.log(error);
  })
}

var updateFile = (req, res)=>{
  dbmodel.findById(req.params.id)
  .then((file)=>{
    file.example = req.body.example || file.title

    file.save((err, data)=>{
      if(err){
        res.status(500).send(err)
      }
      res.send(data)
    })
  })
  .catch(error =>{
    res.send(error)
  })
}

var deleteFile = (req, res)=>{
  dbmodel.findByIdAndRemove({_id:req.params.id})
  .then(()=>{
    res.send('File has been delete')
  })
  .catch(error =>{
    res.send(error)
  })
}

model.exports = {
  findAll, uploadFile, findFile, updateFile, deleteFile
}
