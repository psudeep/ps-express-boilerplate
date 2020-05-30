const express = require('express');
const router = express.Router();

const UserController = require('./../controllers/UserController');
const isAuthenticated = require('./../middlewares/isAuthenticated');

/* GET users listing. */
router.get('/', isAuthenticated.isValid, UserController.getUser);

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
