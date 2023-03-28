const express = require('express');
const controller = require('../controllers/userController');

//GET /stories: send all stories to the user
const router = express.Router();

//GET /stories: send all stories to the user

router.get('/', controller.index);

module.exports = router;