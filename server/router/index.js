const express = require('express');
const router = express.Router();

const controll = require('../controller/index');

router.get('/', controll.findAll)
router.post('/', controll.uploadFile)
router.get('/:id', controll.findFile)
router.put('/:id', controll.updateFile)
router.delete('/:id', controll.deleteFile)
router.post('/upload', controll.uploadFile)

module.exports = router
