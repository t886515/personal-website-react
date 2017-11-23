var mongoose = require('mongoose');

var journalSchema = mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ user: String, body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean
});


var Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;