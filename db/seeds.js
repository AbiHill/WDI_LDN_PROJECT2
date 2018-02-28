const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Art = require('../models/art');
const City = require('../models/city');
const User = require('../models/user');
const Artist = require('../models/artist');
// const artData = require('./data/arts');

let cities = [];
let artists = [];

mongoose.connect('mongodb://localhost/art-database', (err, db) => {
  db.dropDatabase();
  City.create([
    { name: 'London' },
    { name: 'Brighton' },
    { name: 'New York' },
    { name: 'Manchester' },
    { name: 'Bristol' },
    { name: 'Liverpool' },
    { name: 'Los Angeles' },
    { name: 'San Francisco' },
    { name: 'Aberdeen' },
    { name: 'Newcastle' },
    { name: 'Miami' },
    { name: 'Washington' },
    { name: 'Boston' },
    { name: 'Florida' }
  ])
    .then(data => cities = data)
    .then(() => Artist.create([
      { name: 'Banksy' },
      { name: 'London Police' },
      { name: 'Stik' },
      { name: 'David Walker' },
      { name: 'Space Invader' },
      { name: 'Ben Eine' },
      { name: 'Inkie' }
    ]))
    .then(thisdata => artists = thisdata)
    .then(() => User.create({
      username: 'abi',
      userimage: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/21557860_979890177921_6745485056896021315_n.jpg?oh=addb7c3a15d4f9ec81693098c17abfc9&oe=5B109E02',
      email: 'abihill8@gmail.com',
      password: 'password',
      passwordConfirmation: 'password'
    }))
    .then(user => Art.create([{
      artist: artists[4],
      city: cities[0],
      image: 'https://i.imgur.com/nwqfsvl.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[4],
      city: cities[1],
      image: 'https://i.imgur.com/DNGcpTh.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[3],
      city: cities[2],
      image: 'https://i.imgur.com/VQhE8of.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[5],
      city: cities[2],
      image: 'https://i.imgur.com/pTui0ga.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[0],
      city: cities[2],
      image: 'https://i.imgur.com/Eq1pnFc.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[5],
      city: cities[2],
      image: 'https://i.imgur.com/bH9NtsV.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[6],
      city: cities[2],
      image: 'https://i.imgur.com/Nkv8ahd.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[6],
      city: cities[2],
      image: 'https://i.imgur.com/2uVHoYa.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[3],
      city: cities[2],
      image: 'https://i.imgur.com/pNvV4Sn.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }, {
      artist: artists[6],
      city: cities[2],
      image: 'https://i.imgur.com/ievyNsV.jpg',
      description: 'This is a great piece by Space Invader. It\'s located in Brick Lane and is huge',
      user: user
    }]))
    .then(arts => console.log(`${arts.length} arts created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
