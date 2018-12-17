import AbstractResponseType from './AbstractResponseType';
/**
 * On first connection, WebSocket will return client id. We can use that id to
 * set username
 */
class Username extends AbstractResponseType {
  static prepareHtml(msg, timeStr) {
    return `<b>User <em> ${msg.name} </em> signed in at ${timeStr} </b><br>`;
  }
}

export default Username;
