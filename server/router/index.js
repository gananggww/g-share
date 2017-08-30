const express = require('express');
const router = express.Router();

const controll = require('../controller/index');
const images = require('../helper/images')
var gcs = require('@google-cloud/storage')({
  projectId: 'yomos-177809',
  keyFilename: 'yomos-979b62a903f2.json'
});
const CLOUD_BUCKET = 'test-bucket-g-share';
var bucket = gcs.bucket(CLOUD_BUCKET);

router.get('/', controll.findAll)
router.post('/', controll.uploadFile)
router.get('/:id', controll.findFile)
router.put('/:id', controll.updateFile)
router.delete('/:id', controll.deleteFile)
router.post('/upload', images.multer.single('image'), images.sendUploadToGCS, (req,res)=>{
  res.send(req.file.cloudStoragePublicUrl)
})

module.exports = router
