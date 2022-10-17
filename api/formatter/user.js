module.exports = ({ user, accessToken }) => ({
  user: {
    ...user,
    password: undefined,
    cryptoSalt: undefined,
  },
  accessToken,
});
