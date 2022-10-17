const { encryptData } = require('../util/encyrption');
const { CRYPTO_KEY } = require('../constant');

module.exports = class PasswordLogic {
  static checkIfHashedPasswordsAreEqual({ password, hashedPassword }) {
    return password === hashedPassword;
  }

  static hashPassword({ password, salt }) {
    const hashedPassword = encryptData(
      {
        data: password,
        key: CRYPTO_KEY,
        iv: salt,
      },
    );

    return hashedPassword;
  }
};
