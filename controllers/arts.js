const Art = require('../models/art');

function indexRoute(req, res,) {
  Art.find()
    .then(arts => res.render('arts/index', { arts }));

}




module.exports = {
  index: indexRoute

};
