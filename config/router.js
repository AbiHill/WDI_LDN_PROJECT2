const router = require('express').Router();
const arts = require('../controllers/arts');

//home page
router.get('/', (req, res) => res.render('pages/home'));

//about page
router.get('/about', (req, res) => res.render('pages/about'));

//contact page
router.get('/contact', (req, res) => res.render('pages/contact'));

//all arts pages
router.route('/cheeses')
  .get(arts.index);



module.exports = router;
