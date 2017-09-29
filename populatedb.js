#! /usr/bin/env node

console.log('This script populates the database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var User = require('./models/user')
//var Doc = require('./models/doc')
//var File = require('./models/file')
var Authority = require('./models/authority')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var authorities = []
//var books = []
//var bookinstances = []

function userCreate(name, username, password, authorities, mobileNo, superadmin, cb) {
  userdetail = {name:name , username: username, password: password, authorities: authorities, mobileNo: mobileNo, superadmin: superadmin}
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}

function authorityCreate(name, cb) {
  authoritydetail = {name:name}
  
  var authority = new Authority(authoritydetail);
       
  authority.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Authority: ' + authority);
    authorities.push(authority)
    cb(null, authority)
  }  );
}



function createUsers(cb) {
    async.parallel([
        function(callback) {
          userCreate('Dummy', 'dummy', 'dummy', ["59c4ea3efaebb61c19af9432"], 7568597500, true, callback);
        }
        ],
        // optional callback
        cb);
}

function createAuthorities(cb) {
    async.parallel([
        function(callback) {
          authorityCreate('Miscllaneous', callback);
        }
        ],
        // optional callback
        cb);
}



async.series([
    createUsers,
    //createAuthorities,
],
// optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('No error ');
        
    }
    //All done, disconnect from database
    mongoose.connection.close();
});





