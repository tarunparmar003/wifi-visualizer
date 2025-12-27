function rateChannels(networks) {
  const scores = {};

  networks.forEach((n) => {
    const interference = Math.abs(n.signal);
    scores[n.channel] = (scores[n.channel] || 0) + interference;
  });

  return scores;
}

module.exports = rateChannels;
