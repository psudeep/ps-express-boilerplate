/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */

const { check, validationResult } = require('express-validator');
const User = require('./../models/User');

const getUser = async(req, res, next) => {
  try {
    res.json({success: true, code: 200, message: 'hi from user controller'});
  } catch(e) {
    console.log('e', e);
    res.status(500).send({success: false, code: 500, message: 'error occured'});
  }
};

const saveUser = async(req, res, next) => {
  const payload = req.body;
  try {
    const data = await User.create(payload);
    res.send({success: true, data});
  } catch(e) {
    console.log('e', e);
    res.status(500).json({success: false, code: 500, message: 'error occured'});
  }
};

module.exports = {
  getUser,
  saveUser,
};
