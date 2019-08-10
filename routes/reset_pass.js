const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* POST user */
router.post('/', function(req, res, next) {
  res.send('Skeleton POST request for /reset_pass endpoint.');
})

module.exports = router;
