var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHeader(201);
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var messageData = [null, req.body.text, req.body.roomname, req.body.username];
    models.messages.create(messageData, (err, results) => {
      res.writeHeader(201);
      res.json(results);
    });
  } // a function which handles posting a message to the database
};

/*
app.get('port', (req, res, next) => {
  console.log(res);
  successCB(res);
  next();
});


response = {
  results: [
    {
      text: '',
      username: '',
      roomname: ''
    }
  ]
}
*/