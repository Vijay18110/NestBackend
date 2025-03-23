const cryptoJs = require("crypto-js");

const decryptData = (data) => {
  return cryptoJs.AES.decrypt(data, process.env.CRYPTO_SECRET_KEY).toString(
    cryptoJs.enc.Utf8
  );
};
module.exports = decryptData;
