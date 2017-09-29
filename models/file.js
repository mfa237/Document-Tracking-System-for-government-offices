var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FileSchema = Schema(
  {
    name: {type: String, required: true, max: 100},
    documents:[{type: Number, ref: 'Doc'}],
  }
);

// Virtual for file's URL
FileSchema
.virtual('url')
.get(function () {
  return '/files/' + this._id;
});

//Export model
module.exports = mongoose.model('File', FileSchema);
