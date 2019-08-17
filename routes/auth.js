const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

exports.routes = function (app) {
  //@route    POST request to api
  //@desc     POST a user
  //@access   Public
  app.post('/register', [
      UserController.insert
  ]);


};

/* POST login details */
// router.post('/login', function(req, res, next) { // Authenticate given credentials with credentials that are in DB

//     res.send('Skeleton POST request for /login endpoint.');

// })

// /* GET login details (for comparison with input details). */
// router.get('/login', function(req, res, next) {
//   res.send('Skeleton GET request for /login endpoint.');
//   res.send(req.body.name);
// });

// /* POST new user details*/
// router.post('/register', function(req, res, next) {
  
//     res.send('Skeleton POST request for /register endpoint.');
//     express.next();

// })

// /* GET registration page */
// router.get('/register', function(req, res, next) {
//   res.send('Skeleton GET request for /register endpoint.');
//   res.send(req.body.name);
// });

// /* POST new password */
// router.post('/reset_pass', function(req, res, next) {
//     res.send('Skeleton POST request for /reset_pass endpoint.');
//   })

// /* PUT old password to new password */
// // This request is only sent from a page that is accessible through an auto-generated link that the user receives if s/he forgets his/her password.
// router.put('/change_pass', function(req, res, next) { // Change user's old password to the new password
  
//     res.send('Skeleton PUT request for /change_pass endpoint.');

// });

// /* GET page for changing password */
// router.get('/change_pass', function(req, res, next) {
//   res.send('Skeleton GET request for /change_pass endpoint.');
//   res.send(req.body.name);
// });

module.exports = router;
