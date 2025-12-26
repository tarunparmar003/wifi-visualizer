const scanWiFi = require("../../scanner/wifiScanner");
const recommendChannel = require("./channelRecommend");

let lastValidData = [];

module.exports = (io) => {
  setInterval(() => {
    scanWiFi((err, data) => {
      if (Array.isArray(data) && data.length > 0) {
        lastValidData = data;
      }

      if (lastValidData.length > 0) {
        io.emit("wifi_data", lastValidData);
        io.emit("channel_recommendation", recommendChannel(lastValidData));
      }
    });
  }, 15000);
};
