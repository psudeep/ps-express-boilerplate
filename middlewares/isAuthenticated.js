/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */

const isValid = (req, res, next) => {
  console.log('req', req.query);
  if(req.user) {
    next();
  }
  return res.status(401).json({
    success: false,
    code: 401,
    message: 'Unauthorized',
  });
};

module.exports = {
  isValid,
};
