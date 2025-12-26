module.exports = function recommendChannel(data) {
  const count = {};
  data.forEach(ap => {
    count[ap.channel] = (count[ap.channel] || 0) + 1;
  });

  let bestChannel = null;
  let min = Infinity;

  for (const ch in count) {
    if (count[ch] < min) {
      min = count[ch];
      bestChannel = ch;
    }
  }

  return { bestChannel, congestion: count };
};
