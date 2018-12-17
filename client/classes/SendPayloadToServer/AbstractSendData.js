class AbstractSendData {
  /**
   * Sends the data to active connection object which then forwards the data
   * to websocket server
   * @param {string} clientId Client id provided by websocket server
   * @param {object} connection Connection Object
   */
  static send(clientId, connection) {
    const data = this.prepareData(clientId);
    connection.send(JSON.stringify(data));
    this.afterSendTask();
  }

  /**
   * This method is responsible for preparing the data to be sent to websocket server
   * @param {string} clientId Client id provided by websocket server
   * @abstract
   */
  static prepareData(clientId) { // eslint-disable-line
    throw new Error('You have to implement the method prepareData!');
  }

  /**
   * If any specific action needs to be taken after sending the data to websocket
   * server, then classes can implement this method.
   */
  static afterSendTask() {
    // Blank Method
  }
}

export default AbstractSendData;
