const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")


router.get("/:id", userController.login)
router.post("/", userController.register)

module.exports = router
