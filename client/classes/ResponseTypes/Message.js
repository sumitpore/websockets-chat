import AbstractResponseType from './AbstractResponseType';

class Message extends AbstractResponseType {
  static prepareHtml(msg, timeStr) {
    return `( ${timeStr} ) <b> ${msg.name} </b>: ${msg.text} <br>`;
  }
}

export default Message;
