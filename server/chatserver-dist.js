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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/chatserver-src.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common-functions.js":
/*!*****************************!*\
  !*** ./common-functions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction decodeJson(msg) {\n  let decodedData = JSON.parse(msg); // Sometimes we need to decode string twice if it does not parse it properly first time\n\n  if (typeof decodedData === 'string') {\n    decodedData = JSON.parse(decodedData);\n  }\n\n  return decodedData;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  decodeJson\n});\n\n//# sourceURL=webpack:///./common-functions.js?");

/***/ }),

/***/ "./server/chatserver-src.js":
/*!**********************************!*\
  !*** ./server/chatserver-src.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Websocket Server implmented using Node.js\n */\nconst http = __webpack_require__(/*! http */ \"http\");\n\nconst WebSocketServer = __webpack_require__(/*! websocket */ \"websocket\").server;\n\nconst commonFunctions = __webpack_require__(/*! ../common-functions */ \"./common-functions.js\").default;\n\nlet connectionArray = [];\nlet nextId = Date.now();\nlet appendToMakeUnique = 1;\nconst server = http.createServer((request, response) => {\n  console.log(`${new Date()}  Received request for ${request.url}`); // eslint-disable-line no-console\n\n  response.writeHead(404);\n  response.end();\n});\nserver.listen(8888, () => {\n  console.log(`${new Date()}  Server is listening on port 8888`); // eslint-disable-line no-console\n}); // Create the WebSocket server\n\nconst wsServer = new WebSocketServer({\n  httpServer: server,\n  autoAcceptConnections: true\n});\n\nfunction isUsernameUnique(name) {\n  let isUnique = true;\n  let i;\n\n  for (i = 0; i < connectionArray.length; i += 1) {\n    if (connectionArray[i].username === name) {\n      isUnique = false;\n      break;\n    }\n  }\n\n  return isUnique;\n}\n\nfunction getConnectionForId(id) {\n  let connect = null;\n  let i;\n\n  for (i = 0; i < connectionArray.length; i += 1) {\n    if (connectionArray[i].clientId === id) {\n      connect = connectionArray[i];\n      break;\n    }\n  }\n\n  return connect;\n}\n\nfunction makeUserListMessage() {\n  const userListMsg = {\n    type: 'userlist',\n    users: []\n  };\n  let i; // Add the users to the list\n\n  for (i = 0; i < connectionArray.length; i += 1) {\n    userListMsg.users.push(connectionArray[i].username);\n  }\n\n  return userListMsg;\n}\n\nfunction sendUserListToAll() {\n  const userListMsg = makeUserListMessage();\n  const userListMsgStr = JSON.stringify(userListMsg);\n  let i;\n\n  for (i = 0; i < connectionArray.length; i += 1) {\n    connectionArray[i].sendUTF(userListMsgStr);\n  }\n}\n\nwsServer.on('connect', connection => {\n  console.log(`${new Date()}  Connection accepted.`); // eslint-disable-line no-console\n\n  connectionArray.push(connection); // Send the new client its token; it will\n  // respond with its login username.\n\n  connection.clientId = nextId;\n  nextId += 1;\n  let msg = {\n    type: 'clientId',\n    clientId: connection.clientId\n  };\n  connection.sendUTF(JSON.stringify(msg)); // Handle the \"message\" event received over WebSocket. This\n  // is a message sent by a client, and may be text to share with\n  // other users or a command to the server.\n\n  connection.on('message', message => {\n    if (message.type === 'utf8') {\n      console.log(`Received Message: ${message.utf8Data}`); // eslint-disable-line no-console\n      // Process messages\n\n      const sendToClients = true;\n      msg = commonFunctions.decodeJson(message.utf8Data);\n      const connect = getConnectionForId(msg.clientId);\n\n      switch (msg.type) {\n        case 'message':\n          {\n            msg.name = connect.username;\n            msg.text = msg.text.replace(/(<([^>]+)>)/gi, '');\n            break;\n          }\n\n        case 'username':\n          {\n            let nameChanged = false;\n            const origName = msg.name;\n\n            while (!isUsernameUnique(msg.name)) {\n              msg.name = origName + appendToMakeUnique;\n              appendToMakeUnique += 1;\n              nameChanged = true;\n            }\n\n            if (nameChanged) {\n              const changeMsg = {\n                clientId: msg.clientId,\n                type: 'rejectusername',\n                name: msg.name\n              };\n              connect.sendUTF(JSON.stringify(changeMsg));\n            }\n\n            connect.username = msg.name;\n            sendUserListToAll();\n            break;\n          }\n        // no default\n      } // Convert the message back to JSON and send it out\n      // to all clients.\n\n\n      if (sendToClients) {\n        const msgString = JSON.stringify(msg);\n        let i;\n\n        for (i = 0; i < connectionArray.length; i += 1) {\n          connectionArray[i].sendUTF(msgString);\n        }\n      }\n    }\n  }); // Handle the WebSocket \"close\" event; this means a user has logged off\n  // or has been disconnected.\n\n  connection.on('close', () => {\n    connectionArray = connectionArray.filter(el => el.connected);\n    sendUserListToAll(); // Update the user lists\n\n    console.log(`${new Date()}  Peer ${connection.remoteAddress} disconnected.`); // eslint-disable-line no-console\n  });\n});\n\n//# sourceURL=webpack:///./server/chatserver-src.js?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "websocket":
/*!****************************!*\
  !*** external "websocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"websocket\");\n\n//# sourceURL=webpack:///external_%22websocket%22?");

/***/ })

/******/ });