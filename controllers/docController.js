var Doc = require('../models/doc');

// Display list of all Authorities
exports.doc_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc list');
};

// Display detail page for a specific Doc
exports.doc_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc detail: ' + req.params.id);
};

// Display Doc create form on GET
exports.doc_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc create GET');
};

// Handle Doc create on POST
exports.doc_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc create POST');
};

// Display Doc delete form on GET
exports.doc_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc delete GET');
};

// Handle Doc delete on POST
exports.doc_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc delete POST');
};

// Display Doc update form on GET
exports.doc_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc update GET');
};

// Handle Doc update on POST
exports.doc_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Doc update POST');
};
