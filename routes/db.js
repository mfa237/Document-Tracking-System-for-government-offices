var express = require('express');
var router = express.Router();

var authentication_controller = require('../controllers/authenticationController');
var user_controller = require('../controllers/userController');

// The database pages must be called only after the authentication
router.use(authentication_controller.validateToken);

/* GET db */
router.get('/users', function (req, res, next){
  console.log('Inside db router get users function with decoded request = ' + req.decoded.sub);
  if (req.decoded.su){
    console.log('With superadmin here...');
    next();
  } else{
    res.render('index', {title: 'Home Page', errors: [{msg: 'You don\'t have the privileges to access the page.'}]});
  }
}, user_controller.user_list);

/* POST for deleting a user */
router.post('/users/delete', function (req, res, next){
  console.log('Inside db router delete user function with decoded request = ' + req.decoded.sub + ' and request body-token as '+ req.body.token + ' and request user_id as ' + req.body.userId);
  if (req.decoded.su){
    console.log('With superadmin here...');
    next();
  } else{
    res.render('index', {title: 'Home Page', errors: [{msg: 'You don\'t have the privileges to access the page.'}]});
  }
}, user_controller.user_delete_post);

/* POST for editing a user */
router.post('/users/edit', function (req, res, next){
  console.log('Inside db router edit user function with decoded request = ' + req.decoded.sub + ' and request user_id as ' + req.body.userId+ ' and request userName as '+req.body.userName);
  if (req.decoded.su){
    console.log('With superadmin here...');
    next();
  } else{
    res.render('index', {title: 'Home Page', errors: [{msg: 'You don\'t have the privileges to access the page.'}]});
  }
}, user_controller.user_update_post);


module.exports = router;
