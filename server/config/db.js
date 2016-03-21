// var db = require('monk')('localhost/dpec-db');
// exports.db = db;    

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/dpec-db');
exports.db = db;