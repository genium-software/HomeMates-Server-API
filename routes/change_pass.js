const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* POST user */
// This request is only sent from a page that is accessible through an auto-generated link that the user receives if s/he forgets his/her password.
router.put('/', function(req, res, next) { // Change user's old password to the new password
  
    res.send('Skeleton PUT request for /change_pass endpoint.');

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Skeleton GET request for /change_pass endpoint.');
  res.send(req.body.name);
});

module.exports = router;
