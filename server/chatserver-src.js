/**
 * Websocket Server implmented using Node.js
 */

const http = require('http');
const WebSocketServer = require('websocket').server;
const commonFunctions = require('../common-functions').default;

let connectionArray = [];
let nextId = Date.now();
let appendToMakeUnique = 1;

const server = http.createServer((request, response) => {
  console.log(`${new Date()}  Received request for ${request.url}`); // eslint-disable-line no-console
  response.writeHead(404);
  response.end();
});

server.listen(8888, () => {
  console.log(`${new Date()}  Server is listening on port 8888`); // eslint-disable-line no-console
});

// Create the WebSocket server
const wsServer = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: true
});

function isUsernameUnique(name) {
  let isUnique = true;
  let i;

  for (i = 0; i < connectionArray.length; i += 1) {
    if (connectionArray[i].username === name) {
      isUnique = false;
      break;
    }
  }
  return isUnique;
}

function getConnectionForId(id) {
  let connect = null;
  let i;

  for (i = 0; i < connectionArray.length; i += 1) {
    if (connectionArray[i].clientId === id) {
      connect = connectionArray[i];
      break;
    }
  }

  return connect;
}

function makeUserListMessage() {
  const userListMsg = {
    type: 'userlist',
    users: []
  };
  let i;

  // Add the users to the list

  for (i = 0; i < connectionArray.length; i += 1) {
    userListMsg.users.push(connectionArray[i].username);
  }

  return userListMsg;
}

function sendUserListToAll() {
  const userListMsg = makeUserListMessage();
  const userListMsgStr = JSON.stringify(userListMsg);
  let i;

  for (i = 0; i < connectionArray.length; i += 1) {
    connectionArray[i].sendUTF(userListMsgStr);
  }
}

wsServer.on('connect', connection => {
  console.log(`${new Date()}  Connection accepted.`); // eslint-disable-line no-console
  connectionArray.push(connection);

  // Send the new client its token; it will
  // respond with its login username.
  connection.clientId = nextId;
  nextId += 1;

  let msg = {
    type: 'clientId',
    clientId: connection.clientId
  };
  connection.sendUTF(JSON.stringify(msg));

  // Handle the "message" event received over WebSocket. This
  // is a message sent by a client, and may be text to share with
  // other users or a command to the server.

  connection.on('message', message => {
    if (message.type === 'utf8') {
      console.log(`Received Message: ${message.utf8Data}`); // eslint-disable-line no-console

      // Process messages
      const sendToClients = true;
      msg = commonFunctions.decodeJson(message.utf8Data);
      const connect = getConnectionForId(msg.clientId);
      switch (msg.type) {
        case 'message': {
          msg.name = connect.username;
          msg.text = msg.text.replace(/(<([^>]+)>)/gi, '');
          break;
        }
        case 'username': {
          let nameChanged = false;
          const origName = msg.name;

          while (!isUsernameUnique(msg.name)) {
            msg.name = origName + appendToMakeUnique;
            appendToMakeUnique += 1;
            nameChanged = true;
          }

          if (nameChanged) {
            const changeMsg = {
              clientId: msg.clientId,
              type: 'rejectusername',
              name: msg.name
            };
            connect.sendUTF(JSON.stringify(changeMsg));
          }

          connect.username = msg.name;
          sendUserListToAll();
          break;
        }
        // no default
      }

      // Convert the message back to JSON and send it out
      // to all clients.

      if (sendToClients) {
        const msgString = JSON.stringify(msg);
        let i;

        for (i = 0; i < connectionArray.length; i += 1) {
          connectionArray[i].sendUTF(msgString);
        }
      }
    }
  });

  // Handle the WebSocket "close" event; this means a user has logged off
  // or has been disconnected.

  connection.on('close', () => {
    connectionArray = connectionArray.filter(el => el.connected);
    sendUserListToAll(); // Update the user lists
    console.log(`${new Date()}  Peer ${connection.remoteAddress} disconnected.`); // eslint-disable-line no-console
  });
});
