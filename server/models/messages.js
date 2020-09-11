var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var qry = "SELECT messages.content, rooms.roomname, users.username FROM messages \
                OUTER LEFT JOIN users ON (messages.user_id = users.id) \
                OUTER LEFT JOIN rooms ON (messages.room_id = rooms.id) ";
    db.query(qry, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(results);
      }
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    var qry = `INSERT INTO messages \
                VALUES (${params[0]}, ${params[1]}, ${params[2]}, (SELECT user_id FROM users WHERE ( username = ${params[3]} ) LIMIT 1) )`;
    db.query(qry, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(results);
      }
    });
  } // a function which can be used to insert a message into the database
};
