const mongoose = require('mongoose');

// the schema is like a blueprint
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});


// model
module.exports = mongoose.model('Post', postSchema);
