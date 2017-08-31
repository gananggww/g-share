const dotenv = require('dotenv').config();
const dbmodel = require('../model/index');

var findAll = (req, res)=>{
  dbmodel.find()
  .then((files)=>{
    res.send(files)
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
function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

var uploadFile = (req,res)=>{
  dbmodel.create({
    url : req.file.cloudStoragePublicUrl,
    filename: req.file.cloudStorageObject,
    type : req.file.mimetype,
    size : bytesToSize(req.file.size)
  })
  .then((data)=>{
    res.send(data)
  })
  .catch(error =>{
    res.send(error)
  })

}

module.exports = {
  findAll, uploadFile, findFile, updateFile, deleteFile
}
