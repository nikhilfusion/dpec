'use strict';
var express = require('express'),
	bodyParser = require('body-parser'),
    //router  = express.Router(),
    User    = require('./model/user'),
    router	= express();
    
    router.use(bodyParser.urlencoded({ extended: true })); 
    router.use(bodyParser.json());
    
    router.get('/', function(req, res) {
        res.sendfile('client/index.html');// load our public/index.html file
    });
    
    router.post('/user', function(req, res) {
    	console.log("req is", req.body);
    });
    
    
    router.get('/users', function(req, res) {
        console.log("Users", User);
        // User.getUsers(function (err, users) {
        //     console.log("users", users);
        //     if(err) {
        //         res.send(err);
        //     } else {
        //         res.json(users);
        //     }
        // });
    });
    
    
module.exports = router;    

// grab the nerd model we just created
// var User = require('./model/user');

//     module.exports = function(app) {

//         // server routes ===========================================================
//         // handle things like api calls
//         // authentication routes

//         // sample api route
//         app.get('/api/user', function(req, res) {
//             // use mongoose to get all nerds in the database
//             User.find(function(err, nerds) {

//                 // if there is an error retrieving, send the error. 
//                                 // nothing after res.send(err) will execute
//                 if (err)
//                     res.send(err);

//                 res.json(nerds); // return all nerds in JSON format
//             });
//         });

//         // route to handle creating goes here (app.post)
//         // route to handle delete goes here (app.delete)

//         // frontend routes =========================================================
//         // route to handle all angular requests
//         app.get('*', function(req, res) {
//             res.sendfile('client/index.html'); // load our public/index.html file
//         });

//     };

//var User      = require('/controller/user.js');
    //Static    = require('./static'),
    //scraper      = require('./controller/WebScraper/scraper.js');

// API Server Endpoints
// exports.endpoints = [
//     { method: 'POST', path: '/user', config: User.create}
// ];