var express = require('express');
var router = express.Router();

var users = require('../controlers/main')



// Create a new user
router.post('/users', users.users );


module.exports = router;
