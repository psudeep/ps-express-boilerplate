const express = require('express');
const router = express.Router();

var UserController = require('./../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.getUser);

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
