const rateChannels = require("./rateChannels");

module.exports = function recommendChannel(networks) {
  const scores = rateChannels(networks);

  let bestChannel = null;
  let min = Infinity;

  for (const ch in scores) {
    if (scores[ch] < min) {
      min = scores[ch];
      bestChannel = ch;
    }
  }

  return { bestChannel, scores };
};
