const tokenHelper = (request) => {
  const { data } = request.decoded;

  return {
    userId: data.userId,
    email: data.email,
  };
};

module.exports = {
  tokenHelper,
};
