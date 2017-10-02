var User = require('../models/user');
var Authority = require('../models/authority');

var async = require('async');

// Display list of all Users
exports.user_list = function(req, res) {
    console.log('inside userController.user_list');
    User.find({}, 'name authorities superadmin')
    .populate('authorities')
    .exec(function (err, list_users){
        if (err) throw err;
        res.render('user_list', { title: 'User List', user_list: list_users, token: req.query.token });
    });
};

// Display detail page for a specific User
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST
exports.user_delete_post = function(req, res) {
    console.log('Inside user_delete_post with userId: ' + req.body.userId);
    User.findByIdAndRemove(req.body.userId, function (err, results){
	if (err) throw err;
	res.redirect('/db/users?token='+req.body.token);
    });
};

// Display User update form on GET
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST
exports.user_update_post = function(req, res) {
    console.log("inside user controller.update_post");
    /* We have a mongoose schema User which has an attribute called authorities[] i.e. each user can hold multiple authorities. Each Authority has an id and a name. Here we want to update a user info. We have received the updated values in a POST request from the client webpage. We want to find the user and then update its values in the database with the client provided values. */
    var auth_name_array = req.body.authorities.split(","); // We get the authority names in a string in req.body.authorities and split it on commas here
    var auth_id_array = []; // We want to find the corresponding authority ids. We will use this array to store them in. We want to store all authority ids in this array and only then pass the full array on to the updateuser function that is why using async.forEach
    async.forEach(auth_name_array, function(auth_name, callback){
      Authority.find({'name': auth_name}, '_id', function(err, authId){ // We find the corresponding authority in the database and return its id
          if (err) res.send(err);
          console.log("authId: " + authId); // The id is fetching properly and output is good
          auth_id_array.push(authId); // We store the id in our array
          console.log("auth_id_array.length is now " + auth_id_array.length); // The id is added properly and array length is incrementing by 1 with each push
          });      
      callback();
    }, function(err){
      if (err) res.send(err);
      console.log("here to update the record with auth_id_array.length as " + auth_id_array.length); // However, here array length is shown as 0 and the authorities supplied by client are not getting updated in database. This part of the code is seeing an empty array
      User.findByIdAndUpdate(req.body.userId, {$set: {name: req.body.userName, superadmin: req.body.superadmin, authorities: auth_id_array}}, function(err, result){
        if (err) res.send(err);
        res.send(result);
      });
    });
};
