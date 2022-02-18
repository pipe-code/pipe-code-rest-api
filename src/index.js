'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    var io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        origin: "http://pipecode.test",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
      }
    });

    var users = [];
    // listen for user connection
    io.on('connection', function (socket) {
        socket.user_id = (Math.random() * 100000000000000);
        users.push(socket);
        // listen for user diconnect
        socket.on('disconnect', () => {
            users.forEach((user, i) => {
              // delete saved user when they disconnect
              if(user.user_id === socket.user_id) users.splice(i, 1);
            });
        });
    });
    strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
    strapi.emitToAllUsers = postCommented => io.emit('someone_commented', postCommented);

  },
  
};
