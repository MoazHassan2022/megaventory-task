const catchAsync = require("../utils/catch-async");
const ProductService = require("./../services/product-service");

const productServiceInstance = new ProductService();

/**
 * insert a product into your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const insertProduct = catchAsync(async (req, res) => {
  const newProduct = await productServiceInstance.insertProduct(req.body);
  return res.status(200).json({
    status: "success",
    product: newProduct,
  });
});

/**
 * edit a product in your account
 * @param {function} (req, res)
 * @returns {Object} res
 */
const editProduct = catchAsync(async (req, res) => {
  const newProduct = await productServiceInstance.editProduct(req.body);
  return res.status(200).json({
    status: "success",
    product: newProduct,
  });
});

module.exports = {
  insertProduct,
  editProduct,
};
