/**
 * Created by prashantsudeep on 30/05/2020. COVID19
 */

const showPost = async(req, res, next) => {
  try {
    res.render('blog', { title: 'How to improve focus? | Prashant Sudeep' });
  } catch(e) {
    res.render('blog', { title: 'Blog page - CPOO' });
  }
};

module.exports = {
  showPost,
};
