var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var mongoDB = 'mongodb://dtsserver:aadhar@ds017432.mlab.com:17432/uidbaseddts';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//autoIncrement.initialize(db);

module.exports = db;