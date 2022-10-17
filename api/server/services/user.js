const tokenService = require('../../server/services/token.js');
const userDataAccess = require('../../data/data-access/user');
const logger = require('../../plugin/logger');
const PasswordLogic = require('../../logic/password');
const { generateRandomSalt } = require('../../util/encyrption');

const {
  UserNotFoundOrWrongParameter, UserAlreadyCreated, UserCannotCreated,
} = require('../../util/error');

module.exports = {
  async getUser({ id }) {
    const user = await userDataAccess.getUser({ id });

    if (!user) {
      logger.error('[UserService - getUser failed]%o', {
        id,
      });
      throw new UserNotFoundOrWrongParameter();
    }

    return {
      user,
    };
  },

  async login({ email, password }) {
    const user = await userDataAccess.getUserWithEmail({ email });

    if (!user) {
      logger.error('[UserService - login failed]%o', {
        email,
      });

      throw new UserNotFoundOrWrongParameter();
    }

    const hashedPassword = PasswordLogic.hashPassword({ password, salt: user.cryptoSalt });

    if (!PasswordLogic.checkIfHashedPasswordsAreEqual({ password: user.password, hashedPassword })) {
      logger.error('[UserService - invalid password]%o', {
        email,
      });

      throw new UserNotFoundOrWrongParameter();
    }

    const { accessToken } = await tokenService.generateToken({
      data: {
        userId: user._id,
        email: user.email,
      },
    });

    return {
      user,
      accessToken,
    };
  },

  async register({ nameSurname, email, password }) {
    const alreadyRegisteredUser = await userDataAccess.getUserWithEmail({ email });

    if (alreadyRegisteredUser) {
      throw new UserAlreadyCreated();
    }

    const salt = generateRandomSalt(16);

    const hashedPassword = PasswordLogic.hashPassword({ password, salt });
    const user = await userDataAccess.createUser({
      email, password: hashedPassword, nameSurname, cryptoSalt: salt,
    });

    if (!user) {
      logger.error('[UserService - createUser failed]%o', {
        email,
        nameSurname,
      });
      throw new UserCannotCreated();
    }

    return {
      user,
    };
  },
};
