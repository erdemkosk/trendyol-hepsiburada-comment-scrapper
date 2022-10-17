const { LANGUAGES } = require('../constant');

const getLanguageFromRequest = (req, res, next) => {
  const headerLanguage = req.headers['accept-language'];

  if (headerLanguage && Object.values(LANGUAGES).includes(headerLanguage)) {
    req.language = headerLanguage;
  }
  else {
    req.language = LANGUAGES.EN;
  }

  next();
};

module.exports = {
  getLanguageFromRequest,
};
