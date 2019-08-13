const express = require('express');
const isUserAuthenticated = require('../../middleware/googleMiddleware')
const AuthController = require('../../controllers/authController');

module.exports = function(passport){

  //initialize router & passport strategy
  const router = express.Router();
  const googlePassport = require('./googleStrategy')(passport); //retrieve the strategy

  router.get('/', AuthController.renderHome);
  
  // passport.authenticate middleware is used here to authenticate the request
  router.get('/auth/google', googlePassport.authenticate('google', {
    scope: ['profile'] // Used to specify the required data
  }));

  // The middleware receives the data from Google and runs the function on Strategy config
  router.get('/auth/google/callback', googlePassport.authenticate('google'), AuthController.accessSecret);
  
  // Authorization
  router.get('/secret', isUserAuthenticated, AuthController.renderSecret);  // Secret route (hidden if not logged in)
  router.get('/logout', AuthController.loggingOut);

  return router;
}


