const router = require('express').Router();
const arts = require('../controllers/arts');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

// the below are our request handlers
// Every time you go to homepage isHomepage =  true - refer to the javascript in the nav bar
router.get('/', (req, res) => res.render('pages/home', { isHomepage: true }));

router.route('/arts/new')
  .get(secureRoute, arts.new);

router.route('/arts')
  .get(arts.index)
  .post(secureRoute, arts.create);


router.route('/arts/:id')
  .get(arts.show)
  .put(secureRoute, arts.update)
  .delete(secureRoute, arts.delete);

router.route('/arts/:id/edit')
  .get(secureRoute, arts.edit);

router.route('/arts/:id/comments')
  .post(secureRoute, arts.commentsCreate);

router.route('/arts/:id/comments/:commentId')
  .delete(secureRoute, arts.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('/*', (req, res) => res.render('pages/404'));

module.exports = router;
