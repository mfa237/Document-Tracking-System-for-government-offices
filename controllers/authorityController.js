var Authority = require('../models/authority');

// Display list of all Authorities
exports.authority_list = function(req, res) {
    //console.log('inside authorityController.authority_list');
    Authority.find({}, 'name')
    .exec(function (err, list_authorities){
        if (err) throw err;
        //console.log(list_authorities);
        res.send(list_authorities);
    });
};

// Display detail page for a specific Authority
exports.authority_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority detail: ' + req.params.id);
};

// Display Authority create form on GET
exports.authority_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority create GET');
};

// Handle Authority create on POST
exports.authority_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority create POST');
};

// Display Authority delete form on GET
exports.authority_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority delete GET');
};

// Handle Authority delete on POST
exports.authority_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority delete POST');
};

// Display Authority update form on GET
exports.authority_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority update GET');
};

// Handle Authority update on POST
exports.authority_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Authority update POST');
};
