function decodeJson(msg) {
  let decodedData = JSON.parse(msg);
  // Sometimes we need to decode string twice if it does not parse it properly first time
  if (typeof decodedData === 'string') {
    decodedData = JSON.parse(decodedData);
  }
  return decodedData;
}

export default {
  decodeJson
};
