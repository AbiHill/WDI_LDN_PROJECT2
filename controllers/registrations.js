const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body)
    .then(() => res.redirect('/login'))
    .catch(() => {
      req.flash('danger', 'You\re already registered with this email address. Log in');
      res.redirect('/login');
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
