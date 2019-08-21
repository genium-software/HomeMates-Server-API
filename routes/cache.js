const express = require("express");
const redis = require('redis');
const router = express.Router();

const CacheController = require("../controllers/cacheController");
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

router.get('/repos/:username', cache, CacheController.getRepos);

//Cache middleware
function cache(req, res, next) {
  const { username } = req.params;
  res.locals.client = client;
  client.get(username, (err, repos) => {
    if(err) throw err;

    if (repos !== null){
      return res.render('repos', { username: username, repos: repos })
    }
    else{
      next();
    }
  })
}

module.exports = router;
