// JWT based token authentication setup
var jwt = require('jsonwebtoken');
var secureRandom = require('secure-random');

var User = require('../models/user');
var Authority = require('../models/authority');

var signingKey = secureRandom(256, {type: 'Buffer'}); // Create a highly random byte array of 256 bytes


exports.authenticate = function(req, res){
  var query = User.findOne({ 'username': req.body.username});
  query.populate('authorities');

  query.exec(function(err, user){
    if (err) throw err;
    
    if (!user) {
        res.render('index', {title: 'Home Page', errors: [{msg: 'Authentication Failure: No such username exists!'}]});
      } else if (user) {
          // check if password matches
          if (user.password != req.body.password) {
	    //console.log('user.username: '+user.username+' and req.body.username: '+req.body.username);
	    //console.log('user.password: '+user.password+' and req.body.password: '+req.body.password);
            res.render('index', {title: 'Home Page', errors: [{msg: 'Authentication Failure: Password doesn\'t match!'}]});
          } else {
            // if user is found and password is right
            // create a token

            var claims = {
              iss: "DTS",  // The URL of your service
              sub: user.username,    // The usesrname of the user in your system
	            su: user.superadmin, // whether he is a super-admin
              auth:user.authorities, // list of his authorities
              inward:user.inward //check if he is inwaedClerk to display forms accordingly
            }
	    var token = jwt.sign(claims,signingKey, { expiresIn: '1h' }, function(err, token){
	      if (err) {
		return res.send({ success: false, message: 'Failed to create token.' });
	      } else{
 		//console.log('token created is: '+token);
        	res.render('dashboard', {user: user, token: token});
	      }
	    });	

          }

      }
  });

};

          
         
exports.validateToken = function(req, res, next){
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  //console.log('Inside validate token with token as: ' + token);

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, signingKey, function(err, decodedToken) {      
      if (err) {
        return res.render('index', {title: 'Home Page', errors: [{msg: 'Invalid token.'}]});    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decodedToken;
        
	//console.log('Token is valid and decoded as ' + decodedToken.sub);    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    res.redirect('/?errors=No%20token%20provided');
    //return res.render('index', {title: 'Home Page', errors: [{msg: 'No token provided.'}]});
  }

};
