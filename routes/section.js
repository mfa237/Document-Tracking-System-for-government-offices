var express = require("express");
var router = express.Router();

var docController = require("../controllers/docController");
var authenticationController = require("../controllers/authenticationController");

router.use(authenticationController.validateToken);


router.get("/authorities/:id?",function(req,res,next)
{
    console.log("reached");
    //if(!req.decoded.auth.includes("inwardClerk"))
    for(var i=0;i<req.decoded.auth.length;i++)  
    {
        console.log(req.decoded.auth[i]);
        if(req.decoded.auth[i].name === "inwardClerk")  //check if authority is inwardClerk 
        {
            next();
        }
           
    }
        res.render('index', {title: 'Home Page', errors: [{msg: 'Authentication Failure: You don\'t have authority!'}]});
    
},docController.doc_create_get);


module.exports = router; 