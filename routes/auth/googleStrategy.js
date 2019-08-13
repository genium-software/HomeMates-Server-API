const GoogleStrategy = require('passport-google-oauth20');
const config = require('config');
const googleClient = config.get('googleClient');

// TODO: Change it to suit our purposes

module.exports = function(passport){
  // Simple Strategy config
  passport.use(new GoogleStrategy({
    clientID: googleClient.id,          
    clientSecret: googleClient.secret,
    callbackURL: googleClient.callback  //TODO: Change it when deployed
  },
  (accessToken, refreshToken, profile, done) => {
      done(null, profile); // passes the profile data to serializeUser
      console.log(profile);
      console.log("^information above need to be stored in our user database later on.")
  }
  ));

  // Used to stuff a piece of information into a cookie
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Used to decode the received cookie and persist session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  return passport;
}