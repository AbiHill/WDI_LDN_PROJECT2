const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Art = require('../models/art');
const City = require('../models/city');
const User = require('../models/user');
const Artist = require('../models/artist');
// const artData = require('./data/arts');

let cities = [];
let artists = [];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/art-database', (err, db) => {
  db.dropDatabase();
  City.create([
    { name: 'London'},
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091

    }, {
      artist: artists[4],
      city: cities[1],
      image: 'https://i.imgur.com/DNGcpTh.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.8225,
      long: -0.168749
    }, {
      artist: artists[3],
      city: cities[2],
      image: 'https://i.imgur.com/VQhE8of.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[5],
      city: cities[3],
      image: 'https://i.imgur.com/pTui0ga.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[1],
      city: cities[4],
      image: 'https://i.imgur.com/Eq1pnFc.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[0],
      city: cities[1],
      image: 'https://i.imgur.com/bH9NtsV.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[6],
      city: cities[10],
      image: 'https://i.imgur.com/Nkv8ahd.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[6],
      city: cities[5],
      image: 'https://i.imgur.com/2uVHoYa.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[3],
      city: cities[1],
      image: 'https://i.imgur.com/pNvV4Sn.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[0],
      city: cities[0],
      image: 'https://i.imgur.com/eEXBfV4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[2],
      city: cities[3],
      image: 'https://i.imgur.com/GtUNq5w.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[3],
      city: cities[9],
      image: 'https://i.imgur.com/8AU8PVp.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[4],
      city: cities[6],
      image: 'https://i.imgur.com/C2rwieQ.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[5],
      city: cities[7],
      image: 'https://i.imgur.com/rxsvtDQ.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[6],
      city: cities[9],
      image: 'https://i.imgur.com/Rj9Cjeu.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }, {
      artist: artists[1],
      city: cities[13],
      image: 'https://i.imgur.com/V70lcpy.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      user: user,
      lat: 50.829374,
      long: -0.137091
    }]))
    .then(arts => console.log(`${arts.length} arts created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
