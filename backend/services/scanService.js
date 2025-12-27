const scanWiFi = require("../scanner/wifiScanner");
const getWifiAdapter = require("../scanner/wifiAdapter");
const recommendChannel = require("./channelRecommend");

let lastValidData = [];

module.exports = (io) => {
  setInterval(() => {
    scanWiFi((err, data) => {
      if (!err && Array.isArray(data) && data.length) {
        lastValidData = data;
        io.emit("wifi_data", lastValidData);
        io.emit("channel_recommendation", recommendChannel(lastValidData));
      }
    });

    getWifiAdapter((err, adapter) => {
      if (!err && adapter) {
        io.emit("wifi_adapter", adapter);
      }
    });
  }, 5000);
};
