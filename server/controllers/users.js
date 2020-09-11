var models = require('../models');

module.exports = {
  get: function (req, res) {
    // pass request data to models/users.js
    models.users.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHeader(201);
        res.json(results);
      }
    }
    );

  },
  post: function (req, res) {
    var newRow = [null, req.body[username]];
    models.users.create(newRow, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHeader(201);
        res.json(results);
      }
    });
  }
};
