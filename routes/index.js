/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sipu Express Boilerplate' });
});

module.exports = router;
