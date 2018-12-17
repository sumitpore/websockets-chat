/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/chatclient-src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/chatclient-src.js":
/*!**********************************!*\
  !*** ./client/chatclient-src.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_WebsocketConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/WebsocketConnection */ \"./client/classes/WebsocketConnection.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./client/helpers.js\");\n/* harmony import */ var _classes_SendPayloadToServer_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/SendPayloadToServer/Message */ \"./client/classes/SendPayloadToServer/Message.js\");\n/* harmony import */ var _classes_SendPayloadToServer_Username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/SendPayloadToServer/Username */ \"./client/classes/SendPayloadToServer/Username.js\");\n/* harmony import */ var _classes_ResponseTypes_ClientId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/ResponseTypes/ClientId */ \"./client/classes/ResponseTypes/ClientId.js\");\n/* harmony import */ var _classes_ResponseTypes_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/ResponseTypes/Message */ \"./client/classes/ResponseTypes/Message.js\");\n/* harmony import */ var _classes_ResponseTypes_Rejectusername__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/ResponseTypes/Rejectusername */ \"./client/classes/ResponseTypes/Rejectusername.js\");\n/* harmony import */ var _classes_ResponseTypes_Userlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/ResponseTypes/Userlist */ \"./client/classes/ResponseTypes/Userlist.js\");\n/* harmony import */ var _classes_ResponseTypes_Username__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/ResponseTypes/Username */ \"./client/classes/ResponseTypes/Username.js\");\n// Import WebSocket Class\n // Import Helpers\n\n // Import Sending Related Classes\n\n\n // Import Response Related Classes\n\n\n\n\n\n\nwindow.PayloadTypes = {\n  Message: _classes_SendPayloadToServer_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Username: _classes_SendPayloadToServer_Username__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\nwindow.ResponseTypes = {\n  ClientId: _classes_ResponseTypes_ClientId__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  Message: _classes_ResponseTypes_Message__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  Rejectusername: _classes_ResponseTypes_Rejectusername__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  Userlist: _classes_ResponseTypes_Userlist__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  Username: _classes_ResponseTypes_Username__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}; // Creating global object of DOM elements, they don't need to be calculated again\n\nwindow.chatboxElements = {\n  nameField: document.getElementById('name'),\n  textField: document.getElementById('text'),\n  sendBtn: document.getElementById('send'),\n  chatBox: document.getElementById('chatbox'),\n  userlistBox: document.getElementById('userlistbox'),\n  loginBtn: document.getElementById('login')\n};\n\nwindow.connect = function connect() {\n  _classes_WebsocketConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].connect();\n};\n\nwindow.send = function send() {\n  PayloadTypes.Message.send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getClientId(), _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getConnection());\n};\n\nwindow.handleKey = function handleKey(evt) {\n  if (evt.keyCode === 13 || evt.keyCode === 14) {\n    if (!document.getElementById('send').disabled) {\n      window.send();\n    }\n  }\n};\n\n//# sourceURL=webpack:///./client/chatclient-src.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/AbstractResponseType.js":
/*!**************************************************************!*\
  !*** ./client/classes/ResponseTypes/AbstractResponseType.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AbstractResponseType {\n  /**\n   * HTML prepared by this method will be used by updateChatWindow method to\n   * update the chat window. All child classes have to implement this method.\n   *\n   * @param {object} msg Message Object\n   * @param {object} timeStr Time Object\n   * @abstract\n   */\n  static prepareHtml(msg, timeStr) {\n    // eslint-disable-line\n    throw new Error('You have to implement the method prepareHtml!');\n  }\n  /**\n   * Process the response received by Websocket server. Child classes may change\n   * the behavior.\n   * @param {object} msg Message Object\n   * @param {object} timeStr Time Object\n   */\n\n\n  static processResponse(msg, timeStr) {\n    this.updateChatWindow(msg, timeStr);\n  }\n  /**\n   * Updates the Chat window.\n   * @param {object} msg Message Object\n   * @param {object} timeStr Time Object\n   */\n\n\n  static updateChatWindow(msg, timeStr) {\n    const html = this.prepareHtml(msg, timeStr);\n\n    if (html.length) {\n      chatboxElements.chatBox.contentDocument.write(html);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AbstractResponseType);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/AbstractResponseType.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/ClientId.js":
/*!**************************************************!*\
  !*** ./client/classes/ResponseTypes/ClientId.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractResponseType */ \"./client/classes/ResponseTypes/AbstractResponseType.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./client/helpers.js\");\n\n\n/**\n * On first connection, WebSocket will return client id. We can use that id to\n * set username\n */\n\nclass ClientId extends _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static processResponse(msg) {\n    ClientId.sendUsername(msg, _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getConnection());\n  }\n  /**\n   * Send Username to WebSocket\n   * @param {object} msg Response Object received from Websocket Server\n   * @param {object} connection Websocket Sever Connection Object\n   */\n\n\n  static sendUsername(msg, connection) {\n    // Set client id to be used for all messages. It will be used in all messages sent to server\n    _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setClientId(msg.clientId);\n    PayloadTypes.Username.send(msg.clientId, connection);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientId);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/ClientId.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/Message.js":
/*!*************************************************!*\
  !*** ./client/classes/ResponseTypes/Message.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractResponseType */ \"./client/classes/ResponseTypes/AbstractResponseType.js\");\n\n\nclass Message extends _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static prepareHtml(msg, timeStr) {\n    return `( ${timeStr} ) <b> ${msg.name} </b>: ${msg.text} <br>`;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/Message.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/Rejectusername.js":
/*!********************************************************!*\
  !*** ./client/classes/ResponseTypes/Rejectusername.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractResponseType */ \"./client/classes/ResponseTypes/AbstractResponseType.js\");\n\n\nclass Rejectusername extends _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static prepareHtml(msg) {\n    // Disabling eslint for below line in favor of aibnb styleguide\n    return `<b>Your username has been set to <em> ${msg.name} </em> because the name you chose is in use.</b><br>`; // eslint-disable-line prettier/prettier\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rejectusername);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/Rejectusername.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/Userlist.js":
/*!**************************************************!*\
  !*** ./client/classes/ResponseTypes/Userlist.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractResponseType */ \"./client/classes/ResponseTypes/AbstractResponseType.js\");\n\n\nclass Userlist extends _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static prepareHtml(msg) {\n    let ul = '';\n    let i;\n\n    for (i = 0; i < msg.users.length; i += 1) {\n      ul += `${msg.users[i]} <br>`;\n    }\n\n    return ul;\n  }\n\n  static updateChatWindow(msg, timeStr) {\n    const html = this.prepareHtml(msg, timeStr);\n\n    if (html.length) {\n      chatboxElements.userlistBox.innerHTML = html;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Userlist);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/Userlist.js?");

/***/ }),

/***/ "./client/classes/ResponseTypes/Username.js":
/*!**************************************************!*\
  !*** ./client/classes/ResponseTypes/Username.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractResponseType */ \"./client/classes/ResponseTypes/AbstractResponseType.js\");\n\n/**\n * On first connection, WebSocket will return client id. We can use that id to\n * set username\n */\n\nclass Username extends _AbstractResponseType__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static prepareHtml(msg, timeStr) {\n    return `<b>User <em> ${msg.name} </em> signed in at ${timeStr} </b><br>`;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Username);\n\n//# sourceURL=webpack:///./client/classes/ResponseTypes/Username.js?");

/***/ }),

/***/ "./client/classes/SendPayloadToServer/AbstractSendData.js":
/*!****************************************************************!*\
  !*** ./client/classes/SendPayloadToServer/AbstractSendData.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AbstractSendData {\n  /**\n   * Sends the data to active connection object which then forwards the data\n   * to websocket server\n   * @param {string} clientId Client id provided by websocket server\n   * @param {object} connection Connection Object\n   */\n  static send(clientId, connection) {\n    const data = this.prepareData(clientId);\n    connection.send(JSON.stringify(data));\n    this.afterSendTask();\n  }\n  /**\n   * This method is responsible for preparing the data to be sent to websocket server\n   * @param {string} clientId Client id provided by websocket server\n   * @abstract\n   */\n\n\n  static prepareData(clientId) {\n    // eslint-disable-line\n    throw new Error('You have to implement the method prepareData!');\n  }\n  /**\n   * If any specific action needs to be taken after sending the data to websocket\n   * server, then classes can implement this method.\n   */\n\n\n  static afterSendTask() {// Blank Method\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AbstractSendData);\n\n//# sourceURL=webpack:///./client/classes/SendPayloadToServer/AbstractSendData.js?");

/***/ }),

/***/ "./client/classes/SendPayloadToServer/Message.js":
/*!*******************************************************!*\
  !*** ./client/classes/SendPayloadToServer/Message.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractSendData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractSendData */ \"./client/classes/SendPayloadToServer/AbstractSendData.js\");\n\n\nclass Message extends _AbstractSendData__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static send(clientId, connection) {\n    const message = Message.prepareMessage(clientId);\n    connection.send(JSON.stringify(message));\n    chatboxElements.textField.value = '';\n  }\n\n  static prepareMessage(clientId) {\n    return {\n      clientId,\n      text: chatboxElements.textField.value,\n      type: 'message',\n      date: Date.now()\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\n\n//# sourceURL=webpack:///./client/classes/SendPayloadToServer/Message.js?");

/***/ }),

/***/ "./client/classes/SendPayloadToServer/Username.js":
/*!********************************************************!*\
  !*** ./client/classes/SendPayloadToServer/Username.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractSendData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractSendData */ \"./client/classes/SendPayloadToServer/AbstractSendData.js\");\n\n\nclass Username extends _AbstractSendData__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static prepareData(clientId) {\n    return {\n      clientId,\n      name: chatboxElements.nameField.value,\n      date: Date.now(),\n      type: 'username'\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Username);\n\n//# sourceURL=webpack:///./client/classes/SendPayloadToServer/Username.js?");

/***/ }),

/***/ "./client/classes/WebsocketConnection.js":
/*!***********************************************!*\
  !*** ./client/classes/WebsocketConnection.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-functions */ \"./common-functions.js\");\n\n\nclass WebsocketConnection {\n  constructor() {\n    this.connection = new WebSocket(`ws://${window.location.hostname}:8888`);\n    this.onOpenEvent();\n    this.onMessageEvent();\n  }\n  /**\n   * Creating Singleton class because WebSocket should be initated only once\n   */\n\n\n  static getInstance() {\n    if (!WebsocketConnection.instance) {\n      WebsocketConnection.instance = new WebsocketConnection();\n    }\n\n    return WebsocketConnection.instance;\n  }\n  /**\n   * Creating alias of getInstance method just for readability purpose\n   */\n\n\n  static connect() {\n    return WebsocketConnection.getInstance();\n  }\n  /**\n   * Sends the Message/Data to WebSocket Server\n   * @param {object} msg Message data to send\n   */\n\n\n  send(msg) {\n    this.connection.send(JSON.stringify(msg));\n  }\n  /**\n   * Register the callback to execute when Websocket connection opens.\n   */\n\n\n  onOpenEvent() {\n    this.connection.onopen = () => {\n      chatboxElements.textField.disabled = false;\n      chatboxElements.sendBtn.disabled = false;\n    };\n  }\n  /**\n   * Register the callback to execute when Message is received.\n   */\n\n\n  onMessageEvent() {\n    this.connection.onmessage = evt => {\n      const msg = _common_functions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].decodeJson(evt.data);\n      const time = new Date(msg.date);\n      const timeStr = time.toLocaleTimeString();\n      const className = msg.type.replace(/^\\w/, c => c.toUpperCase());\n      ResponseTypes[className].processResponse(msg, timeStr);\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebsocketConnection);\n\n//# sourceURL=webpack:///./client/classes/WebsocketConnection.js?");

/***/ }),

/***/ "./client/helpers.js":
/*!***************************!*\
  !*** ./client/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_WebsocketConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/WebsocketConnection */ \"./client/classes/WebsocketConnection.js\");\n\n\nfunction setClientId(clientId) {\n  window.clientId = clientId;\n}\n\nfunction getClientId() {\n  return window.clientId;\n}\n\nfunction getConnection() {\n  return _classes_WebsocketConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setClientId,\n  getClientId,\n  getConnection\n});\n\n//# sourceURL=webpack:///./client/helpers.js?");

/***/ }),

/***/ "./common-functions.js":
/*!*****************************!*\
  !*** ./common-functions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction decodeJson(msg) {\n  let decodedData = JSON.parse(msg); // Sometimes we need to decode string twice if it does not parse it properly first time\n\n  if (typeof decodedData === 'string') {\n    decodedData = JSON.parse(decodedData);\n  }\n\n  return decodedData;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  decodeJson\n});\n\n//# sourceURL=webpack:///./common-functions.js?");

/***/ })

/******/ });