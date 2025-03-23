const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: "dazssneyj",
  api_key: "574429351992914",
  api_secret: "SvPPQaFHkVzkPS60FJsU5HpGA3Y",
});
const uploadToCloudinary = async (filepath) => {
  const uploadResult = await cloudinary.uploader
    .upload(filepath, { resource_type: "auto" })
    .catch((error) => {
      console.log(error);
    });
  return uploadResult.url;
};
module.exports = uploadToCloudinary;
