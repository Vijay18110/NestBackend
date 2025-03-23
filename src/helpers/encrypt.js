const cryptoJs = require("crypto-js");

const encryptData = (data) => {
  return cryptoJs.AES.encrypt(data, process.env.CRYPTO_SECRET_KEY);
};
module.exports = encryptData;
