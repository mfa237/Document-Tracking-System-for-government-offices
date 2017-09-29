var express = require('express');
var router = express.Router();

var authentication_controller = require('../controllers/authenticationController');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.query.errors);
  res.render('index', { title: 'DTS', errors: [{msg: req.query.errors}] });
});

/* POST home page which will be invoked in case of login attempt*/
router.post('/', authentication_controller.authenticate);

module.exports = router;
