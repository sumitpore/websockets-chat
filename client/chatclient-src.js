// Import WebSocket Class
import WebsocketConnection from './classes/WebsocketConnection';

// Import Helpers
import helpers from './helpers';

// Import Sending Related Classes
import PayloadTypeMessage from './classes/SendPayloadToServer/Message';
import PayloadTypeUsername from './classes/SendPayloadToServer/Username';

// Import Response Related Classes
import ResponseTypeClientId from './classes/ResponseTypes/ClientId';
import ResponseTypeMessage from './classes/ResponseTypes/Message';
import ResponseTypeRejectusername from './classes/ResponseTypes/Rejectusername';
import ResponseTypeUserlist from './classes/ResponseTypes/Userlist';
import ResponseTypeUsername from './classes/ResponseTypes/Username';

window.PayloadTypes = {
  Message: PayloadTypeMessage,
  Username: PayloadTypeUsername
};

window.ResponseTypes = {
  ClientId: ResponseTypeClientId,
  Message: ResponseTypeMessage,
  Rejectusername: ResponseTypeRejectusername,
  Userlist: ResponseTypeUserlist,
  Username: ResponseTypeUsername
};

// Creating global object of DOM elements, they don't need to be calculated again
window.chatboxElements = {
  nameField: document.getElementById('name'),
  textField: document.getElementById('text'),
  sendBtn: document.getElementById('send'),
  chatBox: document.getElementById('chatbox'),
  userlistBox: document.getElementById('userlistbox'),
  loginBtn: document.getElementById('login')
};

window.connect = function connect() {
  WebsocketConnection.connect();
};

window.send = function send() {
  PayloadTypes.Message.send(helpers.getClientId(), helpers.getConnection());
};

window.handleKey = function handleKey(evt) {
  if (evt.keyCode === 13 || evt.keyCode === 14) {
    if (!document.getElementById('send').disabled) {
      window.send();
    }
  }
};
