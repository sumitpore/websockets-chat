import AbstractSendData from './AbstractSendData';

class Message extends AbstractSendData {
  static send(clientId, connection) {
    const message = Message.prepareMessage(clientId);
    connection.send(JSON.stringify(message));
    chatboxElements.textField.value = '';
  }

  static prepareMessage(clientId) {
    return {
      clientId,
      text: chatboxElements.textField.value,
      type: 'message',
      date: Date.now()
    };
  }
}

export default Message;
