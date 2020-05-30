/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */

const getUser = async(req, res, next) => {
  try {
    res.json({success: true, code: 200, message: 'hi from user controller'});
  } catch(e) {
    console.log('e', e);
    res.status(500).send({success: false, code: 500, message: 'error occured'});
  }
};

module.exports = {
  getUser,
};
