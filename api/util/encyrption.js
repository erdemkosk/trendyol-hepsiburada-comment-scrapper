const crypto = require('crypto');

const encryptData = ({ data, key, iv }) => {
  const decodeKey = crypto.createHash('sha256').update(key, 'utf-8').digest();
  const cipher = crypto.createCipheriv('aes-256-cbc', decodeKey, iv);

  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
};

function generateRandomSalt(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
  }
  return result;
}

module.exports = {
  encryptData,
  generateRandomSalt,
};
