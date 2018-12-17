import WebsocketConnection from './classes/WebsocketConnection';

function setClientId(clientId) {
  window.clientId = clientId;
}

function getClientId() {
  return window.clientId;
}

function getConnection() {
  return WebsocketConnection.getInstance();
}

export default {
  setClientId,
  getClientId,
  getConnection
};
