var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthoritySchema = Schema({
    name: {type: String, required: true, max: 100}
  }
);

// Virtual for Authority's URL
AuthoritySchema
.virtual('url')
.get(function () {
  return '/authorities/' + this._id;
});

//Export model
module.exports = mongoose.model('Authority', AuthoritySchema);
