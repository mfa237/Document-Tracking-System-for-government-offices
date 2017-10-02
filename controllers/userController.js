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
    var auth_id_array = req.body.authorities.split(","); // We get the authority ids in a string in req.body.authorities and split it on commas here
    User.findByIdAndUpdate(req.body.userId, {$set: {name: req.body.userName, superadmin: req.body.superadmin, authorities: auth_id_array}}, function(err, result){
        if (err) {console.log("Erroring.");return res.send(err);}
        console.log("After findByIdAndUpdate result._id: " + result._id);
        res.send(result);
      });
};
