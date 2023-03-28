const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

//GET /users/new: go to signup page

router.get('/new', controller.new);

// GET /users/login go to login page

router.get('/login', controller.index);

// GET /users/profile go to login page

router.get('/profile', controller.show);

// GET /users/logout logout user

router.get('/logout', controller.logout);

router.post('/', controller.login);

module.exports = router;