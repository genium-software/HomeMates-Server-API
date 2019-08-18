// Middleware to check if the user is authenticated

async function isUserAuthenticated(req, res, next) {
  if (req.user) {
      await next();
  } else {
      await res.send('You must login!');
  }
}

module.exports = isUserAuthenticated;