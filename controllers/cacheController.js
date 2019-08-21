const CacheController = {
  async getRepos(req, res, next){
    try {
      console.log('Fetching data...');
      const { username } = req.params;
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      const repos = data.public_repos;
      let client = res.locals.client;

      //Set data to Redis
      client.setex(username, 3600, repos);
      return res.render('repos', { username: username, repos: repos })

    } catch (err) {
      console.log(err);
      res.status(500);
    }
  }
}

module.exports = CacheController;
