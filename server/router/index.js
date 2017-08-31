const express = require('express');
const router = express.Router();
const controll = require('../controller/index');
const images = require('../helper/images')


router.get('/', controll.findAll)
router.post('/', controll.uploadFile)
router.get('/:id', controll.findFile)
router.put('/:id', controll.updateFile)
router.delete('/:id', controll.deleteFile)
router.post('/upload', images.multer.single('image'), images.sendUploadToGCS, controll.uploadFile)
router.post('/download',controll.downloadFile)
router.get('/search/:filename', controll.search)

module.exports = router
