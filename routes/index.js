/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */
const express = require('express');
const router = express.Router();

const Blog = require('./../controllers/Blog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sipu Express Boilerplate' });
});

router.get('/blog', Blog.showPost);

module.exports = router;
