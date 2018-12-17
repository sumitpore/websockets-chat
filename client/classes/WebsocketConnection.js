import commonFunctions from '../../common-functions';

class WebsocketConnection {
  constructor() {
    this.connection = new WebSocket(`ws://${window.location.hostname}:8888`);
    this.onOpenEvent();
    this.onMessageEvent();
  }

  /**
   * Creating Singleton class because WebSocket should be initated only once
   */
  static getInstance() {
    if (!WebsocketConnection.instance) {
      WebsocketConnection.instance = new WebsocketConnection();
    }

    return WebsocketConnection.instance;
  }

  /**
   * Creating alias of getInstance method just for readability purpose
   */
  static connect() {
    return WebsocketConnection.getInstance();
  }

  /**
   * Sends the Message/Data to WebSocket Server
   * @param {object} msg Message data to send
   */
  send(msg) {
    this.connection.send(JSON.stringify(msg));
  }

  /**
   * Register the callback to execute when Websocket connection opens.
   */
  onOpenEvent() {
    this.connection.onopen = () => {
      chatboxElements.textField.disabled = false;
      chatboxElements.sendBtn.disabled = false;
    };
  }

  /**
   * Register the callback to execute when Message is received.
   */
  onMessageEvent() {
    this.connection.onmessage = evt => {
      const msg = commonFunctions.decodeJson(evt.data);
      const time = new Date(msg.date);
      const timeStr = time.toLocaleTimeString();
      const className = msg.type.replace(/^\w/, c => c.toUpperCase());
      ResponseTypes[className].processResponse(msg, timeStr);
    };
  }
}

export default WebsocketConnection;
