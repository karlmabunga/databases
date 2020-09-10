var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
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