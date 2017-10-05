var express = require("express");
var router = express.Router();

var docController = require("../controllers/docController");
var authenticationController = require("../controllers/authenticationController");

router.use(authenticationController.validateToken);

var flag = false;


router.get("/authorities/:id?",function(req,res,next)
{
    console.log("reached");
    if(!req.decoded.auth.includes("inwardClerk"))
    for(var i=0;i<req.decoded.auth.length;i++)  
    {
        console.log(req.decoded.auth[i]);
        if(req.decoded.auth[i].name === "inwardClerk")  //check if authority is inwardClerk 
        {
            flag = true;
            next();
            break;
        }
           
    }

    // if(req.decoded.auth.name.includes("inwardClerk"))
    // {
    //     console.log("Inward Clerk");
    //     next();
    // }
    if(!flag)
    {
        res.render('index', {title: 'Home Page', errors: [{msg: 'Authentication Failure: You don\'t have authority!'}]});
    }
        
    
},docController.doc_create_get);


router.post("/authorities/:id?",function(req,res,next)
{
    console.log("Form submitted");
    //code for sanitizing data
    //if(santized)
    next();
    //else
      //prompt to enter correct data
},docController.doc_create_post);


module.exports = router; 