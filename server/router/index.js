const express = require('express');
const router = express.Router();

const controll = require('../controller/index');

router.get('/', controll.findAll)
router.post('/', controll.uploadFile)
router.get('/:id', controller.findFile)
router.put('/:id', controller.updateFile)
router.delete('/:id', controller.deleteFile)

module.exports = router
