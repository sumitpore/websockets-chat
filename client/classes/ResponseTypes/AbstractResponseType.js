class AbstractResponseType {
  /**
   * HTML prepared by this method will be used by updateChatWindow method to
   * update the chat window. All child classes have to implement this method.
   *
   * @param {object} msg Message Object
   * @param {object} timeStr Time Object
   * @abstract
   */
  static prepareHtml(msg, timeStr) { // eslint-disable-line
    throw new Error('You have to implement the method prepareHtml!');
  }

  /**
   * Process the response received by Websocket server. Child classes may change
   * the behavior.
   * @param {object} msg Message Object
   * @param {object} timeStr Time Object
   */
  static processResponse(msg, timeStr) {
    this.updateChatWindow(msg, timeStr);
  }

  /**
   * Updates the Chat window.
   * @param {object} msg Message Object
   * @param {object} timeStr Time Object
   */
  static updateChatWindow(msg, timeStr) {
    const html = this.prepareHtml(msg, timeStr);
    if (html.length) {
      chatboxElements.chatBox.contentDocument.write(html);
    }
  }
}

export default AbstractResponseType;
