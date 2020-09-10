var app = require ('./server/app.js');

var Parse = {

  // when we are ready to use our node server, change Parse.server to localhost 3000

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    // add request to /server/app.js (app.get(callback) aka express for messages in DB
    // app.get('https://12010.3000/', (req, res, next) => { complete after success})


    app.get('port', (req, res, next) => {
      console.log(res);
      successCB(res);
      next();
    });

    // $.ajax({
    //   url: Parse.server,
    //   type: 'GET',
    //   data: { order: '-createdAt' },
    //   contentType: 'application/json',
    //   success: successCB,
    //   error: errorCB || function(error) {
    //     console.error('chatterbox: Failed to fetch messages', error);
    //   }
    // });
  }

};