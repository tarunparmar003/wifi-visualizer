function rateChannels(networks) {
  const scores = {};

  networks.forEach(n => {
    scores[n.channel] = (scores[n.channel] || 0) + n.signal;
  });

  return scores;
}

module.exports = rateChannels;
