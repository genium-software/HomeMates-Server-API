// Load from local files
const db = require('./db/index.js');
const app = require('./app');
//Create the port
const port = process.env.PORT || 5000;

db.connect()
  .then(() => {
    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
});
