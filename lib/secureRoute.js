function secureRoute(req, res, next){
  //if the user is not logged in
  if(!req.session.userId){
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in to do that.');
      res.redirect('/login');
    });

  }
  next(); //this is used so it doesn't get stuck in the function and can move on to the next section of the process. If you don't have this - it will stop at this part.
}

module.exports = secureRoute;
