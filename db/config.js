var mongoose = require('mongoose');
global.Promise = require('bluebird');
mongoose.Promise = require('bluebird');

// mongoose.connect('mongodb://localhost/journalDB', {
//   server: { reconnectTries: Number.MAX_VALUE }
// });
mongoose.connect(
  'mongodb://heroku_fbd9pmlk:vlm68bf83sguifqqb08mpkfnaa@ds247699.mlab.com:47699/heroku_fbd9pmlk',
  {
    server: { reconnectTries: Number.MAX_VALUE },
  },
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connection open');
});

module.exports = db;
