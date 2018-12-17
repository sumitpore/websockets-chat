import AbstractSendData from './AbstractSendData';

class Username extends AbstractSendData {
  static prepareData(clientId) {
    return {
      clientId,
      name: chatboxElements.nameField.value,
      date: Date.now(),
      type: 'username'
    };
  }
}

export default Username;
