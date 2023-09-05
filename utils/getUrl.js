const getUrl = () => {
  return `http://${process.env.HOST}:${process.env.PORT}/`;
};

module.exports = getUrl;
