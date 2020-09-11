var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var qry = "SELECT * FROM users";
    db.query(qry, (err, results) => {
      callback(results);
    });
  },
  create: function (data, callback) {
    var qry = `INSERT INTO users VALUES (${data[0]}, ${data[1]})`;
    db.query(qry, data, (err, results) => {
      callback(results);
    });
  }
};
