module.exports = (function() {
  let output = {};
  fetch("http://localhost:8088/api")
    .then(response => response.json())
    .then(apis => {
      for (const eventType in apis) {
        if (apis.hasOwnProperty(eventType)) {
          output[eventType] = apis[eventType].key;
        }
      }
    });
  return output;
})();
