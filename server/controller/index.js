const dotenv = require('dotenv').config();
const dbmodel = require('../model/index');
const CLOUD_BUCKET = 'g-ser';
const Storage = require('@google-cloud/storage');
const storage = Storage({
  projectId: 'g-ser-178408',
  keyFilename: 'g-ser-4149ee200697.json'
});
const bucket = storage.bucket(CLOUD_BUCKET);

var findAll = (req, res)=>{
  dbmodel.find()
  .then((files)=>{
    res.send(files)
  })
  .catch(error =>{
    res.send(error)
  })
}

var search = (req, res)=>{
  dbmodel.find({filename : req.params.filename})
  .then(files=>{
    res.send(files)
  })
  .catch(err=>{
    res.send(err)
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

var downloadFile = (req,res)=>{
  bucket.file(req.body.file).download({
    destination: `downloads/${req.body.file}`
  }, function(err){
    if(!err){
      res.send('download success')
    }else {
      res.send(err)
    }
  });
}

module.exports = {
  findAll, uploadFile, findFile, updateFile, deleteFile, downloadFile
}
