const Art = require('../models/art');
const City = require('../models/city');
const Artist = require('../models/artist');
const Promise = require('bluebird');

function indexRoute(req, res) {
  console.log(req.query);
  if(req.query.city === 'All') req.query = { artist: req.query.artist };
  if(req.query.artist === 'All') req.query = { city: req.query.city };
  if(req.query.artist === 'All' && req.query.city === 'All') req.query = {};

  Promise.props({
    cities: City.find().sort({ name: 1 }).exec(),
    artists: Artist.find().sort({ name: 1 }).exec(),
    arts: Art.find(req.query).exec()
  })
    .then(data => {
      data.selectedCity = req.query.city;
      data.selectedArtist = req.query.artist;
      res.render('arts/index', data);
    });
}


function createRoute(req, res, next) {
  req.body.user = req.currentUser;

  Art.create(req.body)
    .then(() => res.redirect('/arts'))
    .catch(next);

}

function newRoute(req, res) {

  const promiseArray = [
    Art.findById(req.params.id).populate('artist'),
    City.find(),
    Artist.find()
  ];

  Promise.all(promiseArray)
    .then(data => {
      console.log(data);
      res.render('arts/new', { data });
    })
    .catch(err => console.error(err)); // inject the data into the view

  // City.find()
  //   .then(cities => res.render('arts/new', { cities }));
  // .then(Artist.find()
  // .then(artists => res.render('arts/new', {artists}))
  // how do I get artists and cities in this god damn function?? Ask George..
}


function showRoute(req, res, next) {
  Art.findById(req.params.id)
    .populate('city user comments.user artist')// load in the whole category record
    .then(art => {
      if(!art) return res.render('pages/404');
      res.render('arts/show', { art });
    })
    .catch(next);
}


function editRoute(req, res) {
  // get both art and categories in parallel

  const promiseArray = [
    Art.findById(req.params.id).populate('artist'),
    City.find(),
    Artist.find()
  ];

  Promise.all(promiseArray)
    .then(data => {
      console.log(data);
      res.render('arts/edit', { data });
    })
    .catch(err => console.error(err)); // inject the data into the view
}


// Need to amend this so the when you edit your art it doesn't create a new one.
function updateRoute(req, res){
  Art.findById(req.params.id)
    .then(art => Object.assign(art, req.body))
    .then(art => art.save())
    .then(() => res.redirect(`/arts/${req.params.id}`));
}

function deleteRoute(req, res) {
  Art.findById(req.params.id)
    .then(art => art.remove())
    .then(() => res.redirect('/arts'));
}

function commentsCreateRoute(req, res, next) {
  req.body.user = req.currentUser;

  Art.findById(req.params.id)
    .then(art => {
      art.comments.push(req.body);
      console.log(art.comments);
      return art.save();
    })
    .then(art => res.redirect(`/arts/${art._id}`))
    .catch(next);
}

function commentsDeleteRoute(req,res,next) {
  Art.findById(req.params.id)
    .then(art => {
      const comment = art.comments.id(req.params.commentId);
      comment.remove();
      return art.save();
    })
    .then(art => res.redirect(`/arts/${art._id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentsCreate: commentsCreateRoute,
  commentsDelete: commentsDeleteRoute
};
