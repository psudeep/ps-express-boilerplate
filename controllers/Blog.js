/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */

const config = require('../config/constants');

const showPost = async(req, res, next) => {
  try {
    res.render('blog', {
      title: 'How to improve focus? | Prashant Sudeep',
      config,
    });
  } catch(e) {
    res.render('blog', { title: 'Blog page - CPOO' });
  }
};

module.exports = {
  showPost,
};
