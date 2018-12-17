import AbstractResponseType from './AbstractResponseType';
import helpers from '../../helpers';
/**
 * On first connection, WebSocket will return client id. We can use that id to
 * set username
 */
class ClientId extends AbstractResponseType {
  static processResponse(msg) {
    ClientId.sendUsername(msg, helpers.getConnection());
  }

  /**
   * Send Username to WebSocket
   * @param {object} msg Response Object received from Websocket Server
   * @param {object} connection Websocket Sever Connection Object
   */
  static sendUsername(msg, connection) {
    // Set client id to be used for all messages. It will be used in all messages sent to server
    helpers.setClientId(msg.clientId);

    PayloadTypes.Username.send(msg.clientId, connection);
  }
}

export default ClientId;
