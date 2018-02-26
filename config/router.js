const router = require('express').Router();
const arts = require('../controllers/arts');


//home page
router.get('/', (req, res) => res.render('pages/home'));

//all arts pages
router.route('/arts')
  .get(arts.index);





module.exports = router;
