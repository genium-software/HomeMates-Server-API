const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* POST user */
router.post('/', function(req, res, next) {
  
    res.send('Skeleton POST request for /register endpoint.');

})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Skeleton GET request for /register endpoint.');
  res.send(req.body.name);
});

module.exports = router;
