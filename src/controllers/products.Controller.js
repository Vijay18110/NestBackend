const { pProducts } = require("../data/productsData");
exports.getProducts = (req, res) => {
  res.send({
    status: true,
    msg: "all products get successfylly",
    statuCode: "200",

    data: pProducts,
  });
  console.log("all products router connected");
};
exports.updateProducts = (req, res) => {
  const id = req.params.id;
  let result = pProducts.find((it) => it.id == id);
  result.items = req.body.items;
  res.send(result);
};
exports.deleteProducts = (req, res) => {
  const id = req.params.id;
  let result = pProducts.find((it) => it.id != id);
  res.send({ deletedP: result, msg: "product deleted successfully" });
};
