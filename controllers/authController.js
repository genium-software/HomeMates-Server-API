const AuthController = {
  renderHome(req, res){
    return res.render('index', { title: 'Express' });
  },

  accessSecret(req,res){
    return res.redirect('/secret'); // redirect to secret
  },

  renderSecret(req, res){
    return  res.send('You have reached the secret route');
  },

  loggingOut(req,res){
    req.logout();
    return res.redirect('/');
  }
};

module.exports = AuthController;
